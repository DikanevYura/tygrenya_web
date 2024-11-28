'use client';

import { type FC, useEffect, useRef, useState } from 'react';
import { Navigation, Parallax } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useWindowSize } from 'usehooks-ts';

import { Icon } from '@/components';
import { ReviewItem } from '@/components/review-card';
import { cn } from '@/libs/cn';

const dataList = [
  {
    comment:
      'Доброго дня, хочемо залишити наш відгук! Спільна мова з Данилом була знайдена, на заняття син завжди біг. Після занять і рекомендацій став більше повторювати за нами слова , покращилась імітація. Програма складена чітко і зрозуміло  , а також вдячні за рекомендації , щодо виконання вдома. Щиро рекомендуємо !',
    src: '3.png',
    name: '',
    instagram: '',
  },
  {
    comment:
      'Ваші заняття та поради нам надзвичайно допомогли, Ви чудовий спеціаліст, який не тільки виконує свою роботу а й вміє прекрасно ладнати з дітками та заохотити до навчання🤗 Артур обожнює ходити до вас на заняття 🌸Щиро вдячні Вам за сумлінну роботу з нашим хлопчиком!🥰',
    src: '11.png',
    name: '',
    instagram: '',
  },
  {
    comment:
      'До знайомства з Олександрою я думала що не існує такого спеціаліста котрий міг би хоч чимось зацікавити мою дитину. Постійна біганина на заняттях з точки А в точку Б і байдужість до всього 😔. На першому нашому АВА занятті з Олександрою дитина сама сіла за стіл. Я побачила що він може тосяти, імітувати, намагається складати вкладиші, виконувати завдання☺️. Надіюсь тільки на краще … Ось чому ми приїжджаємо на заняття з Олександрою зі Стрия.',
    src: '4.png',
    name: '',
    instagram: '',
  },
  {
    comment:
      'Дякую за вашу відданість роботі та індивідуальний підхід до дитини. Заняття проходили дуже результативно. Син з великим задоволенням ходив на уроки і з гарним настроєм',
    src: '5.png',
    name: '',
    instagram: '',
  },
  {
    comment:
      'Дякую , Олександра, за заняття , навчання та допомогу в корекції поведінки мого сина Сашка. Ви не лише його навчали, а ще мене даючи поради і відповідаючи на мої численні питання. Тепер мені лекше в спілкуванні з сином , краще його розумію. Також у школі використовуємо Ваші поради.',
    src: '6.png',
    name: '',
    instagram: '',
  },
  {
    comment: 'Моя донечка Ангеліна (6р.), кілька місяців займалася АВА- терапією з Олександрою.  Вона чудовий спеціаліст, вміє знайти підхід до дитини, уважна, спокійна та позитивна. На заняттях використовує багато цікавих методів навчання та комунікативних вправ у ігровій формі. Дитина із задоволенням відвідувала заняття. Ми їй дуже вдячні за професіоналізм,  завзятість і невичерпний ентузіазм!',
    src: '7.png',
    name: '',
    instagram: '',
  },
];

export const Reviews: FC<{ className?: string }> = ({ className }) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const [swiperInstance, setSwiperInstance] = useState<any>(null);
  const parallaxDuration = 100 + dataList.length * 50;
  const { width } = useWindowSize();

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
      ref={sectionRef}
      id="reviews"
      className={cn('w-full bg-text-tugrenya-black', className)}
    >
      <div className="w-full">
        <div className="flex flex-col items-center justify-center gap-5 py-8">
          <h2 className="mb-8 text-center text-text-tugrenya-white">Відгуки</h2>
          <div data-content className="relative w-full">
            <Swiper
              modules={[Navigation, Parallax]}
              slidesPerView="auto"
              speed={1200}
              centeredSlides
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
              wrapperClass="[&>div]:!w-fit"
              onInit={(swiper) => {
                setSwiperInstance(swiper);
              }}
              parallax
              breakpoints={{
                640: {
                  centeredSlides: false,
                  spaceBetween: 24,
                },
              }}
              className={cn(
                width <= 1280 ? 'w-full max-w-full' : '',
              )}
            >
              <div
                slot="container-start"
                ref={bgRef}
                className="absolute bottom-[138px] left-0 h-[100px] min-w-full"
                style={{
                  width: `${parallaxDuration}%`,
                }}
              />
              {dataList.map((item, index) => (
                <SwiperSlide key={index} className="max-w-[90%] md:max-w-[70%]">
                  <ReviewItem item={item} />
                </SwiperSlide>
              ))}
            </Swiper>
            <button
              ref={prevRef}
              type="button"
              aria-label="Previous Slide"
              className="absolute left-6 top-36 z-10 flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-text-tugrenya-white/[0.64] transition-all hover:bg-text-tugrenya-white/80 disabled:invisible"
            >
              <Icon name="arrow_forward" className="size-6 -rotate-180" />
            </button>
            <button
              ref={nextRef}
              type="button"
              aria-label="Next Slide"
              className="absolute right-6 top-36 z-10 flex size-11 -translate-y-1/2 rotate-180 items-center justify-center rounded-full bg-text-tugrenya-white/[0.64] transition-all hover:bg-text-tugrenya-white/80 disabled:invisible"
            >
              <Icon name="arrow_forward" className="size-6 rotate-180" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
