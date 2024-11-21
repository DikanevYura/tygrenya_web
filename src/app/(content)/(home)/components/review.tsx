'use client';

import { type FC, useEffect, useRef, useState } from 'react';
import { Navigation, Parallax } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Icon } from '@/components';
import { ReviewItem } from '@/components/review-card';
import { cn } from '@/libs/cn';

const dataList = [
  {
    comment:
      'Я не вміла вишивати навіть хрестиком. І коли ця сфера настільки невідома, то здається, що ніколи не вийде. І вишити вишиванку самій — неможливо. Але коли пройшла навчання, то вже зрозуміла і тканини, і нитки, і як збирати, і як прати. Моя перша вишиванка ще не готова, але по відчуттях, я вже сама експерт)',
    src: '3.png',
    name: 'Христина, 27 років',
    instagram: 'khrystynapelenio',
  },
  {
    comment:
      'Мені дуже сподобалась подача матеріалу! Круто, що підкреслюється традиційна складова процесу вишивання для України. Подобається також про підхід до вишивання, як до медитації та ритуалу! Процеси пояснені зрозумілою мовою навіть для новачків, як я.',
    src: '11.png',
    name: 'Олеся',
    instagram: 'gamayun_s',
  },
  {
    comment:
      'Максимально зрозуміло пояснюються усі деталі. Як для новачка у вишиванні, мені важливо було дізнатись про особливості різних тканин. Сподобалось, що багато візуального матеріалу, кожен крок супроводжується малюнками, схемами. Є впевненість, що у мене теж вийде )',
    src: '4.png',
    name: 'Єва, 36 років',
    instagram: 'eva_martsen_coach',
  },
  {
    comment:
      'Приємно вражена естетикою навчання! Такі кадри, як в кіно. Не очікувала, що буде так гарно! Дійсно, просто пояснити технічну сторону питання може багато хто. Але тільки Оливка зробить це на стільки красиво, сонячно та надихаюче. Дякую за моє нове хоббі!',
    src: '5.png',
    name: 'Леся, 25 років',
    instagram: 'kravtsivlesia',
  },
  {
    comment:
      'Це не курс, це ти з подругою пʼєш каву вдома і вона тобі розповідає про вишивання в деталях бо хоче щоб в тебе вийшло і ви розділяли це захоплення разом. Дуже атмосферно, професійно та з душею.',
    src: '6.png',
    name: 'Настя, 29 років',
    instagram: '_anikul_',
  },
  {
    comment:
      'Ніколи не думала, що мені зайде вишивання. Але Аля подала все настільки просто і цікаво! А головне – дала стільки ідей, де ця навичка може знадобитися, що я от-от відкрию свою майстерню 😁',
    src: '7.png',
    name: 'Руслана, 24 роки',
    instagram: 'ruslanabanana',
  },
  {
    comment:
      'Я вже вмію вишивати хрестиком, проте зворотня сторона вишивки у мене була неохайна, нитка трохи заплутувалась. Зазвичай я вишиваю подушки, тож цього особливо не видно. Але звісно хочеться покращуватися, вишивати щось складніше, наприклад, сорочку. Онука дала подивитись своє навчання, там на другому уроці все зрозуміло було описано про хрестик, зі схемами. Тепер я можу вишивати красивіше як спереду, так і на звороті. ',
    src: '8.png',
    name: 'Валентина Павлівна, 75 років',
    instagram: '',
  },
  {
    comment:
      'Дякую за такі чудові уроки, я колись багато вишивала, але завжди мала проблему з вузликами. Коли плутається нитка - це завжди був для мене найнеприємніший процес. Оливка навчила як вишивати, щоб нитка не закручувалась у вузлик.  Тепер вишиваю із задоволенням)))',
    src: '9.png',
    name: 'Ольга, 45 років',
    instagram: 'olga_lyapina_ua',
  },
  {
    comment:
      'Дружина попросила пройти цей курс. Було цікаво окрім процесу створення сорочки послухати ще про історію вишиванки. Раніше я багато з цього не знав. Вишивати хрестиком до речі теж навчився. Хоча раніше ніколи за це не брався, вийшло з першого разу - є відео докази. Щойно зʼявиться вільний час – почну вишиванку. ',
    src: '1.png',
    name: 'Ігор, 31 роки',
  },
  {
    comment:
      'Хотів придбати собі вишиванку, проте живу за кордоном і приміряти перед покупкою не можу, а таку цінну річ купувати наосліп побоявся. Вже думав розстроюватися, аж тут попадається мені навчання по вишиванню від Оливки. Ну, думаю, це знак. Такого якісного навчання по такій низькій ціні я в житті не зустрічав. Як вишити сорочку в цілому я теж зрозумів. Cподіваюсь, обрав усе правильно і матиму що вдіти наступного травня на День Вишиванки! ',
    src: '2.png',
    name: 'Олександр, 31 рік',
    instagram: 'legostaevalexander',
  },
  {
    comment:
      'Гайд дуже детально розповідає про кожен вид вишивання, розповідаючи при цьому не тільки про те, як вишивати, але й також і про історію різних стилів вишивання. Ніколи раніше не вишивав нічого, вирішив спробувати, звичайно не відразу, але через кілька днів зміг вишити невеликий малюнок хрестиком.',
    src: '10.png',
    name: 'Савва, 16 років',
    instagram: 'sirixsss',
  },
  {
    comment:
      'Для мене вишивання - це завжди було складно та нервово. До моменту перегляду цих затишних уроків від Оливки я була впевнена що голка з ниткою не для мене, не в цьому житті. Але тепер у мене тепер є ціль - вишиванка. І я впевнено до неї рухаюсь, дякую!',
    src: '12.jpeg',
    name: 'Віталіна, 29 років',
    instagram: 'vitalina_leon',
  },
];

export const Reviews: FC<{ className?: string }> = ({ className }) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const [swiperInstance, setSwiperInstance] = useState<any>(null);
  const parallaxDuration = 100 + dataList.length * 50;

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
    <section ref={sectionRef} id="reviews" className={cn('w-full bg-text-tugrenya-black', className)}>
      {/* <div className="h-12 w-full bg-[url('/assets/images/reviews/patterns.png')]" /> */}
      <div className="w-full">
        <div className="w-full">
          <div className="flex flex-col items-center justify-center gap-5 py-8">
            <h2
              className="mb-8 text-text-tugrenya-white"
            >
              Відгуки
            </h2>
            <div data-content className="relative">
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
                  1012: {
                    centeredSlides: false,
                    spaceBetween: 24,
                  },
                }}
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
                  <SwiperSlide key={index}>
                    <ReviewItem item={item} />
                  </SwiperSlide>
                ))}
              </Swiper>
              <button
                ref={prevRef}
                type="button"
                aria-label="Previous Slide"
                className="invisible absolute left-0 top-1/2 z-10 flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-[rgb(44,56,78)]/[0.64] transition-all hover:bg-[#141F33]/80 disabled:invisible sm:visible"
              >
                <Icon name="arrow_forward" className="size-6 text-white" />
              </button>

              <button
                ref={nextRef}
                type="button"
                aria-label="Next Slide"
                className="invisible absolute right-0 top-1/2 z-10 flex size-11 -translate-y-1/2 rotate-180 items-center justify-center rounded-full bg-[rgb(44,56,78)]/[0.64] transition-all hover:bg-[#141F33]/80 disabled:invisible sm:visible"
              >
                <Icon name="arrow_forward" className="size-6 text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
