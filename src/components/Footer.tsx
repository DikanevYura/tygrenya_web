'use client';

import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-text-tugrenya-black py-16 md:py-20">
      <div className="container flex flex-col gap-10 md:gap-0">
        <div className="flex flex-col items-center justify-center gap-10 md:flex-row md:gap-2 md:border-t md:pt-4 lg:gap-10">
          <Link href="/" className="shrink-0 md:w-[215px]">
            <Image src="/assets/images/Colorful Toy Rental Business Card.svg" alt="logo" width={0} height={0} className="size-full object-cover" />
          </Link>
          <nav>
            <ul className="flex flex-col  gap-4 md:flex-row  md:gap-[60px]">
              <div className="flex space-x-4">
                <button className="glass-button"><i className="fab fa-instagram"></i></button>
                <button className="glass-button"><i className="fab fa-twitter"></i></button>
                <button className="glass-button"><i className="fab fa-whatsapp"></i></button>
                <button className="glass-button"><i className="fab fa-facebook"></i></button>
              </div>
            </ul>
          </nav>
        </div>
        <div className="flex justify-center md:mt-8">
          <span className="text-text-muted">2024</span>
        </div>
      </div>

    </footer>

  );
};

export { Footer };
