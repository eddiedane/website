import type { Metadata } from 'next';
import './globals.css';

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
      <body>{children}</body>
    </html>
  );
}
