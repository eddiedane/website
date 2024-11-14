'use client';

import { useEffect, useState } from 'react';
import { ToastAction } from '@radix-ui/react-toast';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import * as z from 'zod';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { fromBase64Url } from '@/lib/base64';
import { cn } from '@/lib/utils';
import BlocksLoader from '@/components/blocks-loader';

type MessageFormProps = {
  onLoading?: (state: boolean) => void;
  onComplete?: () => void;
  onValid?: (state: boolean) => void;
  className?: string;
};

const messageFormSchema = z.object({
  name: z
    .string()
    .min(1, 'It will be nice to know who is writing to me.')
    .max(50, 'Cool name, but sadly computer memory has limits.'),
  company: z.string().max(50, 'Company name can not be more than 50 character.').optional(),
  email: z
    .string()
    .min(1, 'I would like to know how to reach you, if needed.')
    .email('Seems like the email you entered has a typo, please check.'),
  subject: z
    .string()
    .min(1, 'Sorry, what is your message about?')
    .min(10, 'That is a bit too short, can you be more comprehensive?')
    .max(100, 'This should be more concise, you can elaborate below?'),
  message: z
    .string()
    .min(50, 'Hmmm... can you please elaborate a bit on the subject?')
    .max(
      2500,
      'Wow! you hit the limit, this must be important, we can continue on further correspondence.',
    ),
});

type Field = {
  name: keyof z.infer<typeof messageFormSchema>;
  label: string;
  placeholder: string;
  type?: 'text' | 'email' | 'textarea';
};

const fields: Field[] = [
  {
    name: 'name',
    label: 'my name is',
    placeholder: 'John Doe',
  },
  {
    name: 'company',
    label: 'and my company is',
    placeholder: 'Jane & John Doe',
  },
  {
    name: 'subject',
    label: 'I am writing to you about',
    placeholder: 'A Brief Subject',
  },
  {
    name: 'message',
    label: 'and I want to say',
    placeholder: 'More about the subject...',
    type: 'textarea',
  },
  {
    name: 'email',
    type: 'email',
    label: 'I can be reached at',
    placeholder: 'john.doe@example.com',
  },
];

export default function MessageForm({
  onLoading,
  onComplete,
  onValid,
  className,
}: MessageFormProps) {
  const [loading, setLoading] = useState(false);
  const [valid, setValid] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const { toast } = useToast();
  const form = useForm<z.infer<typeof messageFormSchema>>({
    resolver: zodResolver(messageFormSchema),
    defaultValues: {
      name: '',
      company: '',
      email: '',
      subject: '',
      message: '',
    },
    mode: 'onChange',
  });

  const {
    formState: { isValid },
  } = form;

  useEffect(() => {
    router.prefetch('/');
  }, [router]);

  useEffect(() => {
    if (onValid) onValid(isValid);
    setValid(isValid);
  }, [loading, isValid, onValid]);

  const onSubmit = async (data: z.infer<typeof messageFormSchema>) => {
    try {
      if (onLoading) onLoading(true);
      setLoading(true);

      const res = await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
      });

      if (onLoading) onLoading(false);
      setLoading(false);

      if (res.ok) {
        toast({
          variant: 'default',
          title: 'Message sent successfully!',
          description:
            'Thanks for taking the time to reach out, I will get back to you soon, if need be.',
        });

        console.log('Hello...');

        if (onComplete) onComplete();

        form.reset();

        if (pathname !== '/') {
          setTimeout(() => {
            router.push('/');
          }, 1000);
        }
      }

      if (res.status === 400) {
        // Assuming the response contains an array of errors like: [{ field: "email", message: "Invalid email" }]
        const data: {
          errors: { name?: string[]; email?: string[]; subject?: string[]; message?: string[] };
        } = await res.json();

        // Loop through the errors and set them manually
        Object.entries(data.errors).forEach(([field, messages]) => {
          form.setError(field as keyof z.infer<typeof messageFormSchema>, {
            type: 'manual',
            message: messages[0],
          });
        });
      }

      if (res.status >= 500) {
        toast({
          variant: 'destructive',
          title: 'Oops, this is embarrassing',
          description: 'Something unexpectedly went wrong, please try again later.',
          action: (
            <ToastAction asChild altText='Email me instead'>
              <Button variant='outline' onClick={emailMe}>
                Email me directly
              </Button>
            </ToastAction>
          ),
        });
      }
    } catch (error) {
      console.error('error', error);
    }
  };

  const emailMe = () => {
    const emailBody = `My name is ${form.getValues('name')}\nand my company is ${form.getValues(
      'company',
    )}\n\n${form.getValues('message')}`;

    window.location.href = `${fromBase64Url(
      'bWFpbHRvOmVkZGllZGFuZUBwcm90b25tYWlsLmNvbQ',
    )}?subject=${encodeURIComponent(form.getValues('subject'))}&body=${encodeURIComponent(
      emailBody,
    )}`;
  };

  return (
    <Form {...form}>
      <form
        id='message-form'
        onSubmit={form.handleSubmit(onSubmit)}
        className={cn('flex flex-col gap-4 h-full overflow-y-auto px-5 py-2', className)}
      >
        {fields.map(({ name, label, placeholder, type = 'text' }) => (
          <FormField
            key={name}
            name={name}
            control={form.control}
            render={({ field }) => (
              <FormItem className='text-stone-900 dark:text-stone-200'>
                <FormLabel className='lowercase smallcaps font-bold tracking-wider'>
                  {label}
                </FormLabel>
                <FormControl>
                  {type === 'textarea' ? (
                    <Textarea
                      {...field}
                      placeholder={placeholder}
                      rows={4}
                      className='resize-none bg-stone-300/60 dark:bg-stone-800/60 border-none focus-visible:ring-2 focus-visible:ring-stone-400 dark:focus-visible:ring-stone-700'
                    />
                  ) : (
                    <Input
                      size={2}
                      {...field}
                      placeholder={placeholder}
                      type={type || 'text'}
                      className='bg-stone-300/60 dark:bg-stone-800/60 border-none focus-visible:ring-2 focus-visible:ring-stone-400 dark:focus-visible:ring-stone-700'
                    />
                  )}
                </FormControl>
                <FormMessage className='text-red-500' />
              </FormItem>
            )}
          />
        ))}

        <Button
          disabled={loading || !valid}
          type='submit'
          size='lg'
          className={cn(
            'transition-all duration-300 ease-linear',
            'bg-orange-600 hover:bg-orange-700 disabled:bg-[#99715c]',
            'text-white text-lg font-black',
            'w-56',
            'mt-4 gap-3 py-6',
            'flex justify-center items-center self-center',
          )}
        >
          {!loading ? <span>Send my message</span> : <BlocksLoader color='white' />}
        </Button>
      </form>
    </Form>
  );
}
