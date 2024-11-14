import Image from 'next/image';
import Link from 'next/link';
import { FaCode } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import profilePicture from '@/app/assets/images/profile.jpeg';
import { cn } from '@/lib/utils';
import { reey } from '@/app/assets/fonts';

export default function About() {
  return (
    <section
      id='about'
      className={cn(
        'min-h-screen snap-center snap-always',
        'bg-stone-200 dark:bg-stone-900',
        'relative overflow-hidden',
        'flex items-center justify-center',
      )}
    >
      <div
        className={cn(
          'container',
          'flex md:justify-center md:items-center sm:flex-row flex-col xl:gap-16 lg:gap-10 gap-6',
          'sm:px-5 md:pt-0 sm:pt-24 pt-16 pb-8',
        )}
      >
        <div className='relative z-10 sm:hidden'>
          <div
            className={cn(
              'absolute top-4 right-4',
              'text-orange-100 text-2xl',
              'flex flex-col',
              reey.className,
            )}
          >
            <span>Eddie</span>
            <span>Dane</span>
          </div>
          <Image
            src={profilePicture}
            alt="Eddie Dane's Portrait"
            className='abt-img xl:max-w-sm lg:max-w-xs max-w-full'
          />
        </div>
        <div
          className={cn(
            'sm:mt-0 sm:pt-0',
            '-mt-52 pt-12',
            'sm:px-0 px-5',
            'relative z-20',
            'bg-gradient-to-b from-transparent',
            'via-stone-50 to-stone-200 dark:to-stone-900 dark:via-stone-700',
            'to-30% via-10%',
            'sm:bg-none',
            'max-w-xl',
          )}
        >
          <h2
            className={cn(
              'font-extrabold tracking-tighter',
              'xl:text-4xl md:text-3xl text-2xl',
              'text-stone-800 dark:text-stone-200',
              'text-center md:text-left',
              'mb-1',
            )}
          >
            The Guy Behind the Code
          </h2>

          <div className='flex justify-center md:justify-start items-center gap-4 mb-4 text-stone-600 dark:text-stone-300'>
            <span className='flex items-center gap-1 text-xs'>
              <FaLocationDot />
              <span className='font-semibold uppercase smallcaps'>Nigeria</span>
            </span>
            <span className='flex items-center gap-1 text-xs'>
              <FaCode />
              <span className='font-semibold uppercase smallcaps'>5+ years</span>
            </span>
          </div>

          <div>
            <p className='prose-base flex flex-col gap-2 text-justify md:text-left'>
              <em className='font-black text-lg'>
                Bringing solutions to the web for over five years now, with accessible,
                user-friendly, efficient and scalable applications.&nbsp;
                <Link
                  href='#'
                  className={cn(
                    'inline-block',
                    'uppercase text-base text-orange-700 font-black tracking-wider',
                    'no-underline hover:underline',
                    'p-0',
                  )}
                >
                  view my résumé
                </Link>
              </em>
              <span>
                Thinking back to my early days with programming , from writing HTML on my phone when
                I didn&apos;t yet have a computer to now building and deploying fully functional web
                apps and tools, one of the things that have remained unchanged about me is my
                endless fascination with programming, the fact that I can programmatically describe
                an idea with code and bring it to reality. This has given me a creative freedom that
                drives my love and obsession for developing for the web, leading me to solve some
                amazing problems that the early me would have thought were impossible.
              </span>
            </p>
          </div>
        </div>
        <div className='relative hidden sm:block self-start'>
          <span
            className={cn(
              'absolute top-0 left-0',
              'text-stone-800 dark:text-stone-200 text-2xl',
              reey.className,
            )}
          >
            Eddie
          </span>
          <Image
            src={profilePicture}
            alt="Eddie Dane's Portrait"
            className={cn('xl:max-w-52 sm:max-w-52 max-w-60', 'rounded-e-full')}
          />
          <span
            className={cn(
              'absolute bottom-0 right-0',
              'text-6xl text-stone-800 dark:text-stone-200',
              reey.className,
            )}
          >
            <span className='hidden'>D</span>ane
          </span>
        </div>
      </div>
    </section>
  );
}
