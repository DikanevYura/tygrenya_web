'use client';

import Image from 'next/image';
import React, { type FC, useEffect, useRef, useState } from 'react';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Icon } from '@/components/Sprite';
import { cn } from '@/libs/cn';

export const Lessons: FC<{
  slides: {
    id: number;
    image: string;
    title: string;
    description: string;
  }[];
  className?: string;
}> = ({ slides, className }) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperInstance, setSwiperInstance] = useState<any>(null);
  // const [activeIndex, setActiveIndex] = useState<number>(1);

  useEffect(() => {
    if (swiperInstance) {
      swiperInstance.params.navigation.prevEl = prevRef.current;
      swiperInstance.params.navigation.nextEl = nextRef.current;
      swiperInstance.navigation.destroy();
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, [swiperInstance]);

  return (
    <section
      id="lessons"
      className={cn('overflow-hidden pt-12 pb-8', className)}
    >
      <h2 className="h1 text-center text-text-tugrenya-black">Наші Послуги</h2>
      <div
        data-content
        className="relative mx-auto mb-8 mt-6 max-w-[1882px] px-5 sm:px-12"
      >
        <Swiper
          spaceBetween={16}
          slidesPerView="auto"
          centeredSlidesBounds
          centeredSlides
          modules={[Navigation]}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onInit={(swiper) => {
            setSwiperInstance(swiper);
          }}
          // onSlideChange={(swiper) => {
          //   setActiveIndex(swiper.realIndex);
          // }}
          breakpoints={{
            1012: {
              spaceBetween: 48,
            },
          }}
          className="!overflow-visible"
        >
          {slides.map((slide) => {
            // const nextSlide =
            //   activeIndex === slides.length - 1 ? 0 : activeIndex + 1;

            return (
              <SwiperSlide
                key={`Lessons_${slide.id}`}
                className="max-w-[319px]"
              >
                <div className="flex flex-col items-center">
                  <Image
                    className="aspect-[1.276/1] w-[319px]"
                    src={slide.image}
                    alt={`slide-${slide.id}`}
                    width={896}
                    height={1190}
                    quality={100}
                    loading="lazy"
                  />
                  <div className="mt-2 flex items-center justify-center text-text-tugrenya-black">
                    <h5 className="text-center font-semibold">{slide.title}</h5>
                  </div>
                  <span className="text-center text-sm font-normal leading-5 text-text-tugrenya-black">
                    {slide.description}
                  </span>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <button
          ref={prevRef}
          type="button"
          aria-label="Previous Slide"
          className="absolute left-6 top-36 z-10 flex size-11  -translate-y-1/2 items-center  justify-center rounded-full bg-[#ffffff]/[0.64] transition-all hover:bg-[#ffffff]/80 disabled:invisible"
        >
          <Icon name="arrow_forward" className="size-6" />
        </button>

        <button
          ref={nextRef}
          type="button"
          aria-label="Next Slide"
          className="absolute right-6 top-36 z-10 flex size-11 -translate-y-1/2 rotate-180 items-center justify-center rounded-full bg-[#ffffff]/[0.64] transition-all hover:bg-[#ffffff]/80 disabled:invisible"
        >
          <Icon name="arrow_forward" className="size-6" />
        </button>
      </div>
    </section>
  );
};
