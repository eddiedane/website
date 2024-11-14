'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { majorMonoDisplay } from '@/app/assets/fonts';
import { cn } from '@/lib/utils';

type LogoProps = {
  className?: string;
  shuffle?: boolean;
};

export default function Logo({ className, shuffle }: LogoProps) {
  const container = useRef(null);
  const duration = 0.5;

  useGSAP(
    () => {
      if (!shuffle) return;

      gsap
        .timeline()
        .repeat(-1)
        .repeatDelay(3)
        .to('.e1', { x: '100%', duration })
        .to('.e1', { y: '100%', duration }, 4 * duration)
        .to('.e1', { x: '0', duration }, 8 * duration)
        .to('.e1', { y: '0', duration }, 12 * duration)

        .to('.d1', { y: '100%', duration }, 1 * duration)
        .to('.d1', { x: '-100%', duration }, 5 * duration)
        .to('.d1', { y: '0', duration }, 9 * duration)
        .to('.d1', { x: '0', duration }, 13 * duration)

        .to('.n1', { x: '-100%', duration }, 2 * duration)
        .to('.n1', { y: '-100%', duration }, 6 * duration)
        .to('.n1', { x: '0', duration }, 10 * duration)
        .to('.n1', { y: '0', duration }, 14 * duration)

        .to('.d2', { y: '-100%', duration }, 3 * duration)
        .to('.d2', { x: '100%', duration }, 7 * duration)
        .to('.d2', { y: '0', duration }, 11 * duration)
        .to('.d2', { x: '0', duration }, 15 * duration);
    },
    { scope: container },
  );

  return (
    <span
      ref={container}
      className={cn(
        majorMonoDisplay.className,
        'flex flex-col',
        'text-xl leading-[0.95em] text-stone-900 dark:text-stone-200',
        className,
      )}
    >
      <span className='flex'>
        <span className='e1'>E</span>
        <span className='d1'>D</span>
      </span>
      <span className='flex'>
        <span className='d2'>D</span>
        <span className='n1'>N</span>
      </span>
    </span>
  );
}
