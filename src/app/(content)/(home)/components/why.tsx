'use client';

import type { FC } from 'react';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import { cn } from '@/libs/cn';

const mockSlides = [
  {
    id: 1,
    image: '/assets/images/why/1.png',
    title: '100% підтвердження якості',
    description:
      'Доведена ефективність навчання. Технологію створення вишитої сорочки успішно зрозуміли 100% учнів фокус-групи різного віку, статі та рівня навичок.',
  },
  {
    id: 2,
    image: '/assets/images/why/2.png',
    title: 'Вигідно',
    description: 'Ціна фіксована, а доступ до матеріалів – назавжди!',
  },
  {
    id: 3,
    image: '/assets/images/why/3.png',
    title: 'Додаткові матеріали',
    description:
      'У ціну входить не лімітований в часі доступ до відео матеріалів, текстові гайди, посилання на перевірені товари та магазини – усе що потрібно.',
  },
  {
    id: 4,
    image: '/assets/images/why/4.png',
    title: 'Антистрес',
    description:
      'Науково доведено, що рукоділля знижує рівень тривожності та піднімає настрій. Окрім того, протягом усього навчання викладатиме Оливка особисто. Тож буде цікаво!',
  },
];

export const Why: FC<{ className?: string }> = ({ className }) => {
  return (
    <section className={cn('overflow-hidden py-12 bg-text-tugrenya-black', className)}>
      <h2 className="h2 text-center text-text-tugrenya-white">Чому «Тигреня»</h2>
      {/* <div className="absolute mt-14 h-24 w-full bg-[url('/assets/images/why/patterns.png')]" /> */}
      <div data-content className="mx-auto mt-12 max-w-[912px]">
        <Swiper
          spaceBetween={40}
          breakpoints={{
            1012: {
              slidesPerView: 4,
              loop: false,
              centeredSlides: false,
              spaceBetween: 52,
            },
            431: {
              loop: false,
            },
          }}
          loop
          centeredSlides
          slidesPerView="auto"
          className="!overflow-visible"
        >
          {mockSlides.map((slide) => {
            return (
              <SwiperSlide key={`Why_${slide.id}`} className="max-w-48">
                <div className="flex flex-col items-center">
                  {/* <div className="relative mb-6 aspect-square w-32 overflow-hidden rounded-full">
                    <Image
                      src={slide.image}
                      alt="slide"
                      fill
                      className="image w-full object-cover"
                      quality={80}
                    />
                  </div> */}
                  {/* <div className="mb-1 flex h-10 items-center justify-center">
                    <h5 className="text-center font-semibold">{slide.title}</h5>
                  </div> */}
                  <span className="text-center text-sm font-normal leading-5 tracking-[-0.1px]">
                    {slide.description}
                  </span>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};
