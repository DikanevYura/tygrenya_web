'use client';

import { useEffect, useState } from 'react';

import { Icon } from '../Sprite';
// Import the up arrow icon

const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {showButton && (
        <button
          type="button"
          onClick={scrollToTop}
          className="hover:bg-brand-dark fixed bottom-8 right-4 z-50  flex rounded-md bg-text-tugrenya-white p-3 text-white shadow-lg transition-all md:bottom-8 md:right-8"
          aria-label="Scroll to top"
        >
          <Icon name="arrow_forward" className="size-[24px] -rotate-90 text-text-tugrenya-black" />
        </button>
      )}
    </>
  );
};

export default ScrollToTopButton;
