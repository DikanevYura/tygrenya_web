import '@/styles/global.css';
import 'swiper/css';

import type { Viewport } from 'next';
import { Open_Sans } from 'next/font/google';
import Head from 'next/head';
import type { ReactNode } from 'react';

import { Footer, Header, Sprite, Toaster } from '@/components';
import ScrollToTopButton from '@/components/ui/scroll-button';
import { cn } from '@/libs/cn';

export async function generateMetadata() {
  return {
    title: {
      default: '',
    },
    icons: [
      {
        rel: 'apple-touch-icon',
        url: '/favicon_big.png',
      },
      {
        rel: 'icon',
        url: '/favicon.ico',
      },
    ],
  };
}

const viewport: Viewport = {
  viewportFit: 'cover',
};

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-openSans',
  display: 'swap',
});

export default function RootLayout(props: {
  children: ReactNode;
  params: { locale: any };
}) {
  return (
    <html
      prefix="og: https://ogp.me/ns#"
      lang="en"
      className={cn('max-w-screen !bg-[#FFFBF7]', openSans.variable)}
    >
      <body className="overflow-x-hidden">
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
        </Head>
        <Sprite />
        <Toaster />
        <Header />
        {props.children}
        <ScrollToTopButton />
        <Footer />
        <div id="modal-root" />
      </body>
    </html>
  );
}

export { viewport };
