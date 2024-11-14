import { cn } from '@/lib/utils';

type BlocksProps = {
  className?: string;
  color?: string;
};

export default function BlocksLoader({ className, color }: BlocksProps) {
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
      className={cn(className)}
    >
      <rect className={cn('spinner_9y7u')} x='1' y='1' rx='1' width='10' height='10' fill={color} />
      <rect
        className={cn('spinner_9y7u spinner_DF2s')}
        x='1'
        y='1'
        rx='1'
        width='10'
        height='10'
        fill={color}
      />
      <rect
        className={cn('spinner_9y7u spinner_q27e')}
        x='1'
        y='1'
        rx='1'
        width='10'
        height='10'
        fill={color}
      />
    </svg>
  );
}
