import { Metadata } from 'next';
import '../app/assets/styles/globals.css';
import { metropolis } from '@/app/assets/fonts';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/layout/header';

export const metadata: Metadata = {
  title: 'Eddie Dane — Web Developer',
  description:
    'Creativity born from a focus on solutions—turning ideas into innovative, impactful solutions.',
  icons: {
    icon: [
      {
        url: '/favicon-light.ico',
        href: '/favicon-light.ico',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/favicon-dark.ico',
        href: '/favicon-dark.ico',
        media: '(prefers-color-scheme: dark)',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={cn(
          metropolis.className,
          'antialiased overflow-hidden',
          'text-stone-950 dark:text-stone-100',
        )}
      >
        <div className='max-h-screen overflow-y-auto snap-y snap-mandatory scroll-smooth'>
          <Header />
          {children}
        </div>
        <Toaster />
      </body>
    </html>
  );
}
