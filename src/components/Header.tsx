/* eslint-disable ts/no-unused-expressions */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react-dom/no-missing-button-type */
'use client';

import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import { useScrollLock } from 'usehooks-ts';

import { useMediaQuery } from '@/hooks';
import { cn } from '@/libs/cn';

import { DecorCircle } from './DecorCircle';
import { Icon } from './Sprite';
import { IconButton } from './ui';

const menuItems = [
  { name: 'Послуги', id: 'services' },
  { name: 'Відгуки', id: 'reviews' },
  { name: 'Часті запитання', id: 'how-it-works' },
  { name: 'Основні принципи', id: 'principi' },
  { name: 'Структура заняття', id: 'structure' },
  { name: 'Контакти', id: 'contacts' },
];

const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollbarWidth, setScrollbarWidth] = useState(0);
  const { lock, unlock } = useScrollLock({ autoLock: false });

  const isMobile = useMediaQuery({ maxWidth: 1279 });
  const headerRef = useRef<HTMLDivElement>(null);

  const toggleMobileMenu = () => {
    setIsOpenMenu((prev) => {
      const newValue = !prev;
      newValue ? lock() : unlock();
      return newValue;
    });
  };

  const handleResize = () => {
    if (!isMobile && isOpenMenu) {
      setIsOpenMenu(false);
      unlock();
    }
  };

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (headerRef.current) {
      const headerHeight = headerRef.current.offsetHeight;
      setIsScrolled(currentScrollY > headerHeight);
    }
  };

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      const yOffset = -100;
      const yPosition = section.getBoundingClientRect().top + window.scrollY + yOffset;

      window.scrollTo({
        top: yPosition,
        behavior: 'smooth',
      });
    }
    setIsOpenMenu(false);
    unlock();
  };

  useEffect(() => {
    if (window.scrollY > (headerRef.current?.offsetHeight || 0)) {
      setIsScrolled(true);
    }

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isOpenMenu, isMobile]);

  useEffect(() => {
    setScrollbarWidth(window.innerWidth - document.documentElement.clientWidth);
  }, []);

  return (
    <header
      className={cn('fixed inset-x-0 top-0 z-[100] bg-[#fde1b1]', isScrolled && 'shadow-md', isOpenMenu && 'bg-[#fde1b1] h-svh')}
      ref={headerRef}
    >
      {isOpenMenu && (
        <>
          <DecorCircle color="orange" className="right-[-225px] top-[-52px]" />
          <DecorCircle color="orange" className="bottom-[-52px] left-[-225px]" />
        </>
      )}
      <div className="relative flex w-full flex-wrap items-center justify-between xl:flex-nowrap xl:px-12 xl:py-6">
        <div
          className="relative flex w-full items-center justify-between p-5 md:px-6 xl:w-auto xl:justify-start xl:p-0"
          style={{ marginRight: isOpenMenu ? `${scrollbarWidth}px` : 0 }}
        >
          <div
            className={cn(
              'absolute inset-0 border-b backdrop-blur-2xl opacity-0 transition-opacity duration-200',
              isScrolled && !isOpenMenu && 'opacity-100 xl:opacity-0',
            )}
          />
          <span
            className={cn(
              'relative mr-6 shrink-0 cursor-pointer logo-animation',
              isScrolled && 'no-animation',
            )}
            onClick={() => scrollToSection('home')}
          >
            <Image src="/assets/images/logo.svg" alt="logo" width={165} height={50} />
          </span>

          <div className="relative flex items-center gap-5 xl:hidden">
            <IconButton
              icon={isOpenMenu ? 'close' : 'drag_handle'}
              className="text-white"
              variant="ghost"
              onClick={toggleMobileMenu}
            />
          </div>
        </div>
        <div
          className={cn(
            'hidden grow items-center relative justify-between xl:flex w-full mt-11 xl:mt-0 flex-col-reverse xl:flex-row px-4 py-5 xl:p-0 max-w-[350px] xl:max-w-full mx-auto xl:mx-0',
            isOpenMenu && 'flex p-0',
          )}
        >
          <nav className="mt-10 w-full border-components-stroke-default xl:ml-auto xl:mt-0 xl:w-auto xl:rounded-full xl:border xl:bg-surface-secondary-default xl:px-4 xl:backdrop-blur-lg">
            <ul className="flex flex-col items-center gap-2 xl:flex-row">
              {menuItems.map(item => (
                <li key={item.name} className="w-full xl:w-auto">
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className={cn(
                      'flex xl:rounded-full px-4 xl:py-[7px] py-3 xl:text-sm text-base text-text-tugrenya-black xl:font-semibold hover:text-white duration-default hover:bg-[#5c3737]/50 justify-between',
                    )}
                  >
                    {item.name}
                    <Icon name="chevron_forward" className="flex size-5 text-text-tugrenya-black xl:hidden" />
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export { Header };
