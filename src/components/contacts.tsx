import Link from 'next/link';
import { FaXTwitter, FaLinkedin, FaGithub } from 'react-icons/fa6';
import { cn } from '@/lib/utils';

type ContactsProps = {
  showLabel?: boolean;
  className?: string;
};

type Contact = {
  name: string;
  link: string;
  Icon: React.ElementType;
  title: string;
};

export default function Contacts({ showLabel = true, className }: ContactsProps) {
  const contacts: Contact[] = [
    {
      name: 'Twitter',
      link: 'https://x.com/eddiedane_',
      Icon: FaXTwitter,
      title: '@eddiedane_',
    },
    {
      name: 'LinkedIn',
      link: 'https://www.linkedin.com/in/eddiedane/',
      Icon: FaLinkedin,
      title: 'linkedin.com/in/eddiedane',
    },
    {
      name: 'Github',
      link: 'https://github.com/eddiedane',
      Icon: FaGithub,
      title: '@eddiedane',
    },
    /* {
      name: 'Upwork',
      link: 'https://www.upwork.com/freelancers/~01b8abbbfa0fa41e71?mp_source=share',
      Icon: FaUpwork,
      title: 'Eddie Dane on Upwork',
    }, */
  ];

  return (
    <div className={cn('flex justify-between grow', className)}>
      {contacts.map(({ name, link, title, Icon }) => (
        <Link
          href={link}
          key={name}
          target='_blank'
          className={cn('flex flex-col', 'items-center justify-center', 'gap-1', 'relative')}
          title={title}
        >
          <Icon className={cn('w-8 xl:w-10 h-8 xl:h-10', 'text-stone-800 dark:text-stone-100')} />
          <span className={cn('text-xs', { 'sr-only': !showLabel })}>{name}</span>
        </Link>
      ))}
    </div>
  );
}
