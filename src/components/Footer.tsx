'use client';

import Image from 'next/image';
import Link from 'next/link';

import { Icon } from './Sprite';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-text-tugrenya-black pb-2 pt-16 md:pt-20">
      <div className="container flex flex-col gap-10 md:gap-0">
        <div className="flex w-full flex-col items-center justify-between gap-10 md:flex-row md:items-start md:gap-2 md:border-t md:pt-4 lg:gap-10">
          <div className="relative flex">
            <Image src="/assets/images/logo-white.svg" alt="logo" width={175} height={50} />
          </div>
          <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
            <Link href="/privacy" className="text-text-tugrenya-white hover:text-text-tugrenya-white/50">Політика конфіденційності</Link>
            <Link href="/" className="text-text-tugrenya-white hover:text-text-tugrenya-white/50">Публічна оферта</Link>
          </div>
          <nav>
            <ul className="flex flex-col gap-4 md:flex-row md:gap-[60px]">
              <div className="flex space-x-4">
                <Link href="https://www.instagram.com/psychologist_oleksandra/" className="glass-button">
                  <i className="fab fa-instagram">
                    <Icon name="instagram-svgrepo-com" size={32} />
                  </i>
                </Link>
                <Link href="https://t.me/oleksandraa_aa" className="glass-button">
                  <i className="fab fa-twitter">
                    <Icon name="telegram-svgrepo-com" size={24} />
                  </i>
                </Link>
              </div>
            </ul>
          </nav>
        </div>
        <div className="flex justify-center md:mt-8">
          <span className="text-text-muted">
            {currentYear}
            {' '}
            Всі права захищені. Тигреня
          </span>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
