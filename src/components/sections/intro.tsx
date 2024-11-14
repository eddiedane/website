import Orbit from '@/components/3d/orbit';
import { cn } from '@/lib/utils';
import { notable } from '@/app/assets/fonts';
import Contacts from '@/components/contacts';
import Message from '@/components/message';

export default function Intro() {
  const firstName = 'Eddie';
  const lastName = 'Dane';

  return (
    <section
      id='intro'
      className='bg-stone-50 dark:bg-stone-800 min-h-screen snap-center snap-always'
    >
      <div className='container min-h-screen grid grid-cols-12 xl:px-0 lg:px-20'>
        <div
          className={cn(
            'relative z-10',
            'lg:col-span-5 col-span-12',
            'lg:self-center self-end justify-self-center',
            'relative lg:left-16 xl:left-auto lg:top-0 sm:top-[40%] top-[30%]',
            'flex flex-col lg:gap-6 gap-5',
            'lg:pl-16',
          )}
        >
          <h1
            id='names'
            className={cn(
              notable.className,
              '-mt-5',
              // 'text-[clamp(2.5rem,20vmin,9rem)]',
              'xl:text-9xl lg:text-8xl text-7xl text-left',
              'font-extrabold',
              'leading-none',
              'tracking-tighter',
              'flex lg:flex-col sm:flex-row lg:gap-0 sm:gap-6 flex-col',
            )}
            style={{ perspective: '2000px' }}
            aria-label={`${firstName} ${lastName}`}
          >
            <span className='text-stone-700 dark:text-stone-200 uppercase'>
              {firstName.split('').map((letter, index) => (
                <span key={index}>{letter}</span>
              ))}
              <span className='block after bg-stone-700 dark:bg-stone-200'></span>
            </span>
            <span className='text-stone-400 dark:text-stone-500 uppercase'>
              {lastName.split('').map((letter, index) => (
                <span key={index}>{letter}</span>
              ))}
              <span className='block after bg-stone-500 dark:bg-stone-500'></span>
            </span>
          </h1>

          <div className='flex lg:flex-col lg:items-start lg:justify-start sm:justify-center gap-6 relative'>
            <h2
              className={cn(
                'intro-item',
                'bg-slate-500',
                'bg-gradient-to-br',
                'from-orange-300 via-orange-500 to-orange-300',
                'bg-clip-text',
                'xl:text-4xl sm:text-2xl text-2xl',
                'font-black',
                'uppercase',
                'tracking-[.1em]',
                'text-transparent',
              )}
            >
              Web Developer
            </h2>
            <div
              className={cn(
                'intro-item',
                'hidden lg:flex flex-col md:flex-row md:gap-8 gap-4 px-5 sm:px-0',
              )}
            >
              <Contacts className='lg:justify-start lg:grow-0 lg:gap-8' showLabel={false} />
              <Message />
            </div>
          </div>
        </div>
        <div className='lg:h-[65%] md:h-5/6 h-4/5 lg:self-center self-start lg:col-span-7 col-span-12'>
          <Orbit />
        </div>
      </div>
    </section>
  );
}
