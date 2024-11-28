import '@/styles/global.css';
import 'swiper/css';

import type { Viewport } from 'next';
import { Open_Sans } from 'next/font/google';
import type { ReactNode } from 'react';

import { Footer, Header, Sprite, Toaster } from '@/components';
import { MapProvider } from '@/components/provider/map-provider';
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
        <Sprite />
        <Toaster />
        <MapProvider>
          <Header />
          {props.children}
          <ScrollToTopButton />
          <Footer />
          <div id="modal-root" />
        </MapProvider>
      </body>
    </html>
  );
}

export { viewport };
