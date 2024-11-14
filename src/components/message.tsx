'use client';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef, useState } from 'react';
import { BiSolidMessageDetail } from 'react-icons/bi';
import { cn } from '@/lib/utils';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import MessageForm from '@/components/message-form';
import { Button } from '@/components/ui/button';

type MessageBtnProps = {
  showLabel?: boolean;
  message?: string;
  className?: string;
};

export default function Message({ showLabel = true, message, className }: MessageBtnProps) {
  const [showMessage, setShowMessage] = useState(true);
  const [open, setOpen] = useState(false);
  const messageRef = useRef(null);

  useGSAP(() => {
    if (!messageRef.current || !message) return;
    const tl = gsap.timeline();

    tl.to(messageRef.current, {
      opacity: 1,
      duration: 1,
      x: 0,
      y: showLabel ? -25 : -20,
      scale: 1,
      ease: 'elastic.out(1,0.3)',
      delay: 3,
    }).to(messageRef.current, {
      opacity: 0,
      duration: 0.3,
      x: 24,
      // y: 15,
      scale: 0.9,
      delay: 5,
      onComplete: () => {
        setShowMessage(true);
      },
    });
  });

  const handleComplete = () => {
    setTimeout(() => {
      setOpen(false);
    }, 600);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant='cta'
          className={cn(
            'flex items-center justify-center h-12 rounded-md px-3 text-lg',
            'gap-2',
            'relative z-10',
            '[&_svg]:size-7',
            className,
          )}
        >
          <span className='relative'>
            {message && showMessage && (
              <strong
                ref={messageRef}
                className={cn(
                  'absolute -top-full z-0 -right-2',
                  'bg-stone-500 dark:bg-stone-100',
                  'text-stone-100 dark:text-stone-500 text-nowrap',
                  'font-medium',
                  'px-4 py-3',
                  'rounded-xl',
                  'opacity-0',
                  'translate-x-6',
                  'scale-90',
                )}
              >
                {message}
              </strong>
            )}
          </span>
          <BiSolidMessageDetail className={cn('bg-stone-900', 'rounded-sm', 'relative z-10')} />
          <strong>Get in touch</strong>
        </Button>
      </DialogTrigger>
      <DialogPortal>
        <DialogOverlay className='bg-stone-50/20 backdrop-blur-md'>
          <DialogContent className='bg-stone-200 dark:bg-stone-900 max-h-[85vh] flex flex-col gap-6 border-none px-0'>
            <DialogHeader className='px-5'>
              <DialogTitle className='text-center tracking-wide text-2xl lowercase smallcaps text-stone-900 dark:text-stone-200'>
                Tête-à-tête
              </DialogTitle>
              <DialogDescription className='text-center text-stone-700 dark:text-stone-400'>
                Leave a message and I will get back to you as soon as possible.
              </DialogDescription>
            </DialogHeader>
            <MessageForm onComplete={handleComplete} />
          </DialogContent>
        </DialogOverlay>
      </DialogPortal>
    </Dialog>
  );
}
