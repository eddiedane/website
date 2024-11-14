import Image from 'next/image';
import Link from 'next/link';
import { StaticImageData } from 'next/image';
import { cn } from '@/lib/utils';
import cs50xGoldFramed from '@/app/assets/images/trophies/cs50x-gold-framed.png';
import cs50pGoldFramed from '@/app/assets/images/trophies/cs50p-gold-framed.png';
import cs50wGoldFramed from '@/app/assets/images/trophies/cs50w-gold-framed.png';
import atomicHabits from '@/app/assets/images/books/atomic-habits.jpg';
import dockerDeepDive from '@/app/assets/images/books/docker-deep-dive.jpg';
import identityMan from '@/app/assets/images/books/solving-identity-management.jpg';
import grokkingAlgorithms from '@/app/assets/images/books/grokking-algorithms.jpeg';
// import letsGo from '@/app/assets/images/books/lets-go.jpeg';
import masteringGo from '@/app/assets/images/books/mastering-go.jpeg';
import goProgrammingLanguage from '@/app/assets/images/books/go-programming-language.jpeg';
import stumblingOnHappiness from '@/app/assets/images/books/stumbling-on-happiness.jpeg';
import Book from '@/components/book';

type Trophy = {
  name: string;
  src: string;
  image: StaticImageData;
};

type Book = {
  name: string;
  image: StaticImageData;
};

const books: Book[] = [
  {
    name: 'The Go Programming Language',
    image: goProgrammingLanguage,
  },
  {
    name: 'Atomic Habit',
    image: atomicHabits,
  },
  {
    name: 'Mastering Go',
    image: masteringGo,
  },
  {
    name: 'Docker: Deep Dive',
    image: dockerDeepDive,
  },
  {
    name: 'Solving Identity Management',
    image: identityMan,
  },
  {
    name: 'Grokking Algorithms',
    image: grokkingAlgorithms,
  },
  {
    name: 'Stumbling on Happiness',
    image: stumblingOnHappiness,
  },
];

const trophies: Trophy[] = [
  {
    name: 'Harvard CS50x',
    src: 'https://cs50.harvard.edu/certificates/d62d2dd0-f205-4e8f-8547-1fa8919a9454',
    image: cs50xGoldFramed,
  },
  {
    name: 'Harvard CS50 Web',
    src: 'https://cs50.harvard.edu/certificates/85a59c86-43fe-4620-9ed4-284f5a30a224',
    image: cs50wGoldFramed,
  },
  {
    name: 'Harvard CS50 Python',
    src: 'https://cs50.harvard.edu/certificates/af646804-2374-4263-97d2-8943ca88b586',
    image: cs50pGoldFramed,
  },
];

export default function Education() {
  return (
    <section id='education' className='bg-stone-100 dark:bg-stone-800 snap-center snap-always'>
      <div
        className={cn(
          'container min-h-screen',
          'justify-center items-center',
          'xl:gap-8 gap-12',
          'lg:flex hidden',
        )}
      >
        <div className='edu-text xl:w-[30em] w-[25em]'>
          <h2
            className={cn(
              'font-extrabold tracking-tighter',
              'xl:text-4xl md:text-3xl text-2xl',
              'text-stone-800 dark:text-stone-100',
              'text-center md:text-left',
              'mb-4',
            )}
          >
            A Learning and Development Journey
          </h2>
          <p>
            Everything I know about programming today is largely the fruit of self-directed learning
            and the invaluable knowledge gained I have gained from industry experts. Every course,
            book, coding session and project have shaped who I am as a developer and individual,
            with each challenge pushing me to be more resilient, adaptable and creative.
          </p>
        </div>
        <div className='flex flex-col justify-center gap-16 xl:w-[32em] w-[30em]'>
          <div className='relative'>
            <h3 className='sr-only'>Books</h3>
            <ul
              className={cn(
                'scroll-edge-sm w-full',
                'px-8 pb-6',
                'flex flex-nowrap items-end gap-8',
                'overflow-x-auto overflow-y-hidden scrollbar-hidden',
              )}
            >
              {books.map(({ name, image }, i) => (
                <li key={i}>
                  <Book className='edu-book' image={image} key={i} title={name} />
                </li>
              ))}
            </ul>
          </div>
          <div className='relative'>
            <h2 className='sr-only'>Certificates and Trophies</h2>
            <ul
              className={cn(
                'scroll-edge-sm w-full px-8',
                'flex flex-nowrap items-end gap-6',
                'overflow-x-auto overflow-y-hidden scrollbar-hidden',
              )}
            >
              {trophies.map(({ name, image, src }, i) => (
                <li key={i}>
                  <Link
                    href={src}
                    target='_blank'
                    className={cn('trophy-lg', 'flex flex-col items-center gap-3')}
                  >
                    <Image
                      src={image}
                      key={name}
                      alt={name + ' certificate'}
                      className={cn('max-w-64', 'border')}
                    />
                    <span
                      className={cn(
                        'font-semibold',
                        'text-stone-400 dark:text-stone-300',
                        'hover:underline underline-offset-2',
                      )}
                    >
                      {name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className='flex flex-col justify-center sm:gap-10 gap-4 min-h-screen lg:hidden'>
        <h2
          className={cn(
            'font-extrabold tracking-tighter',
            'xl:text-4xl md:text-3xl text-2xl',
            'text-stone-800 dark:text-stone-100',
            'text-center',
          )}
        >
          A Learning Journey
        </h2>
        <div className='relative'>
          <h3 className='sr-only'>Books</h3>
          <div
            className={cn(
              'flex flex-nowrap items-end',
              'gap-8',
              'overflow-x-auto overflow-y-hidden scrollbar-hidden',
              'w-full',
              'lg:px-0 sm:px-10 px-5',
            )}
          >
            {books.map(({ name, image }, i) => (
              <Book className='edu-book-sm' image={image} key={i} title={name} />
            ))}
          </div>
        </div>
        <p className='edu-text-sm md:prose-base prose-sm lg:px-0 sm:px-10 px-5 self-center leading-normal text-justify'>
          Everything I know about programming today is largely the fruit of self-directed learning
          and the invaluable knowledge gained I have gained from industry experts. Every course,
          book, coding session and project have shaped who I am as a developer and individual, with
          each challenge pushing me to be more resilient, adaptable and creative.
        </p>
        <div className='relative'>
          <h3 className='sr-only'>Certificates and Trophies</h3>
          <div
            className={cn(
              'flex flex-nowrap',
              'overflow-x-auto overflow-y-hidden',
              'w-full',
              'md:gap-10 gap-6',
              'lg:px-0 sm:px-10 px-5',
              'items-start',
              'scrollbar-hidden',
            )}
          >
            {trophies.map(({ name, image, src }, i) => (
              <Link href={src} target='_blank' className='flex flex-col items-center gap-3' key={i}>
                <Image
                  src={image}
                  key={name}
                  alt={name + ' certificate'}
                  className='sm:max-w-60 max-w-36 border'
                />
                <span
                  className={cn(
                    'text-sm font-semibold',
                    'text-stone-400 dark:text-stone-300',
                    'hover:underline underline-offset-2',
                  )}
                >
                  {name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
