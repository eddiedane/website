import Image from 'next/image';
import { HiSquares2X2 } from 'react-icons/hi2';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { chakraPetch } from '@/app/assets/fonts';
import illoLogo from '@/app/assets/images/illo/logo.svg';
import illoAnalyticsCropped from '@/app/assets/images/illo/analytics-orders-mini.jpg';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogPortal,
  DialogOverlay,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '../ui/dialog';

type ProjectCardProps = {
  size?: 72 | 64;
};

export default function Projects() {
  return (
    <section
      id='projects'
      className={cn(
        'min-h-screen',
        'bg-stone-200 dark:bg-stone-900',
        'flex flex-col justify-center gap-6',
        'snap-center snap-always',
      )}
    >
      <div className='container px-5 flex flex-col gap-2 text-center items-center'>
        <h2 className='font-extrabold xl:text-4xl md:text-3xl text-2xl tracking-tighter text-stone-800 dark:text-stone-100'>
          <span className='hidden'>From&nbsp;</span>Concepts to Reality
        </h2>
        <p className='prose prose-sm prose-stone dark:prose-invert !leading-5 tracking-tight md:max-w-[36em]'>
          Every project starts with an idea. Here&apos;s a collection of my work and projects, where
          concepts are transformed into functional solutions and digital experiences.
        </p>
      </div>

      <ul
        className={cn(
          'flex items-start md:justify-center flex-nowrap',
          'overflow-y-hidden overflow-x-auto scrollbar-hidden',
          'gap-14 w-full px-5',
        )}
      >
        <li>
          <IlloProjectCard />
        </li>
        <li className='self-center'>
          <Dialog>
            <DialogTrigger asChild>
              <button
                className={cn(
                  'p-2 rounded-full',
                  'bg-stone-300 dark:bg-stone-800',
                  'hover:bg-stone-400/50 dark:hover:bg-stone-700/50',
                  'transition-all duration-300',
                  'scale-100 hover:scale-95 active:scale-90',
                )}
              >
                <HiSquares2X2 className={cn('text-stone-700 dark:text-stone-300', '!text-8xl')} />
              </button>
            </DialogTrigger>
            <DialogPortal>
              <DialogOverlay className='bg-stone-50/20 backdrop-blur-md'>
                <DialogContent className='bg-stone-200 dark:bg-stone-900 max-h-[85vh] flex flex-col gap-6 border-none px-0'>
                  <DialogHeader className='px-5 relative'>
                    <DialogTitle className='tracking-wide text-2xl lowercase smallcaps text-stone-900 dark:text-stone-200'>
                      Miscellaneous Projects
                    </DialogTitle>
                    <DialogDescription className='text-stone-700 dark:text-stone-400 sr-only'>
                      A collection of tools, packages and other projects.
                    </DialogDescription>
                  </DialogHeader>
                  <ul className='flex flex-col gap-6'>
                    <li
                      className={cn(
                        'flex flex-col items-start gap-1 p-5',
                        'bg-transparent',
                        'hover:bg-stone-300 dark:hover:bg-stone-700/20',
                      )}
                    >
                      <Link href='/project/rake' className='block w-full'>
                        <span
                          className={cn(chakraPetch.className, 'font-black text-green-600 text-xl')}
                        >
                          rake CLI&nbsp;
                        </span>
                        <small>
                          Configuration base CLI tool for automation and data extraction.
                        </small>
                      </Link>
                      <Link
                        href='https://pypi.org/project/rake-python/'
                        className='text-sm text-stone-500 hover:text-stone-600 dark:hover:text-stone-400 hover:underline underline-offset-2'
                        target='_blank'
                      >
                        view on PyPI
                      </Link>
                    </li>
                  </ul>
                </DialogContent>
              </DialogOverlay>
            </DialogPortal>
          </Dialog>
        </li>
      </ul>
    </section>
  );
}

function IlloProjectCard({ size = 72 }: ProjectCardProps) {
  return (
    <Link
      href='/work/illo'
      prefetch={true}
      className={cn('block', 'rounded-lg overflow-hidden', 'border-4 border-stone-700', {
        'min-w-72 max-w-72': size === 72,
        'min-w-64 max-w-64': size === 64,
      })}
    >
      <div
        role='img'
        aria-label='illo logo overlaying the order analytics page'
        className='flex items-center relative'
      >
        <Image src={illoAnalyticsCropped} alt='illo orders analytics page' loading='eager' />
        <div className='absolute inset-0 flex items-center justify-center bg-stone-50/50 backdrop-blur-[1.5px]'>
          <Image
            src={illoLogo}
            alt='illo logo'
            draggable={false}
            className='w-16 h-auto'
            loading='eager'
          />
          <span className='text-7xl font-semibold dark:text-stone-950'>illo</span>
        </div>
      </div>
      <div className='p-3 text-sm leading-none'>
        <h3 className='inline font-semibold text-2xl'>illo&nbsp;</h3>
        <p className='inline'>
          A premium <span className='inline-block'>e-commerce</span> and stores management platform.
        </p>
        <p className='text-xs font-extrabold text-stone-500 mt-3 lowercase smallcaps text-right'>
          <span className='text-sm'>
            Work at <span className='dark:text-stone-200'>Dreama</span>
            <span className='text-blue-500'>x</span>
          </span>{' '}
          <br /> 2021 - 2023
        </p>
      </div>
    </Link>
  );
}
