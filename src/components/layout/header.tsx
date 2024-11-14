'use client';

import { useState } from 'react';
import FragLink from '@/components/frag-link';
import Logo from '@/components/logo';
import Drawer from '@/components/drawer';
import { navigation } from '@/data';
import { cn } from '@/lib/utils';

export default function Header() {
  const [activeSection, setActiveSection] = useState('Intro');

  return (
    <header className='fixed top-0 left-0 right-0 z-50 h-16 md:h-20 backdrop-blur-2xl bg-[#fafaf900] border-b'>
      <nav className='container px-5 h-full w-full flex items-center justify-center'>
        <ul className='md:flex justify-center items-center xl:gap-16 lg:gap-14 md:gap-6 sm:gap-4 gap-2 hidden'>
          {navigation.map(({ text, href }, i) => (
            <li key={i} className='flex'>
              <FragLink
                href={href}
                strict={false}
                onIntersecting={({ name }) => setActiveSection(name)}
                className={cn(
                  'nav-item',
                  'md:py-4 sm:px-4 sm:py-3 py-2 px-2',
                  'text-stone-700 dark:text-stone-400 font-semibold md:text-xl sm:text-lg text-base smallcaps',
                  'hover:underline underline-offset-4 decoration-orange-600 decoration-double',
                  'transition-all duration-100',
                  {
                    'scale-125 text-stone-900 dark:text-stone-100 font-black':
                      activeSection === text.toLowerCase(),
                  },
                )}
              >
                {text.toLowerCase()}
              </FragLink>
            </li>
          ))}
        </ul>
        <div className='w-full flex items-center justify-between md:hidden'>
          <FragLink href='/#intro'>
            <Logo shuffle={false} />
          </FragLink>
          <div className='flex justify-between items-center gap-3'>
            <span className='font-semibold tracking-wider capitalize text-lg'>{activeSection}</span>
            <Drawer activeSection={activeSection} />
          </div>
        </div>
      </nav>
    </header>
  );
}
