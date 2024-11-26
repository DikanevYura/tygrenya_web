import type { ServiceCardProps } from '@/components/ui/services-card';

import { BannerMain } from './components/bannerMain';
import { FreqQuestion } from './components/freqQuestion';
import { MapComponent } from './components/map';
import { Lessons } from './components/our-features';
import { Reviews } from './components/review';
import { Services } from './components/services';
import BannerGrid from './components/small-banner';
import { Why } from './components/why';

const LESSONS_SLIDES = [
  {
    id: 1,
    image: '/assets/images/4.jpg',
    title: 'Корекційно-розвиткові заняття',
    description:
      `Ці заняття спрямовані на розвиток соціальних, комунікативних та навчальних навичок у дітей. Вони можуть включати ігри, вправи на розвиток пам'яті, уваги та моторики. Важливо забезпечити різноманітність завдань, щоб підтримувати інтерес дитини.`,
  },
  {
    id: 2,
    image: '/assets/images/5.jpg',
    title: 'Оцінка навичок',
    description:
      'Для оцінки рівня навичок дітей використовуються тести Vb-MAPP (Verbal Behavior Milestones Assessment and Placement Program) та ABLLS-R (Assessment of Basic Language and Learning Skills). Ці інструменти допомагають визначити сильні та слабкі сторони дитини, що дозволяє розробити індивідуальні програми розвитку.',
  },
  {
    id: 3,
    image: '/assets/images/10.jpg',
    title: 'Індивідуальні програми розвитку',
    description:
      'На основі результатів тестування створюються індивідуальні програми розвитку, які враховують специфічні потреби кожної дитини. Це дозволяє ставити конкретні цілі та досягати їх разом з дітьми через регулярні заняття та підтримку.',
  },
  {
    id: 4,
    image: '/assets/images/7.jpg',
    title: 'Психологічна підтримка батьків',
    description:
      `Психологічна підтримка батьків є невід'ємною частиною процесу. Батьки отримують консультації щодо виховання та навчання своїх дітей, що допомагає їм краще розуміти потреби дитини і адаптувати свої методи виховання.`,
  },
  {
    id: 5,
    image: '/assets/images/8.jpg',
    title: 'Підготовка до школи',
    description:
      `Індивідуальна програма проведення занять по 4 дитини у групі.
Ціль програми :
· Адаптація дитини у колективі
· Створення позитивного ставлення до навчання через ГРУ
· Розвиток когнітивних навичок
· Підвищення витривалості та моторики
· Освоєння основ математики, читання та письма`,
  },
];

const mockData = [
  {
    id: 1,
    value: 'Навички самообслуговування: Наприклад, одягання, догляд за собою.',
    desc: '',
    image: '/assets/images/1.jpg',
    subDesk: '',
    path: '/special-offer',
  },
  {
    id: 2,
    value: 'Соціальні навички: Взаємодія з іншими людьми та розвиток комунікаційних здібностей.',
    desc: 'АВА-терапія допомагає дітям розвивати різноманітні навички, включаючи',
    image: '/assets/images/2.jpg',
    subDesk: '',
    path: '/new-collection',
  },
  {
    id: 3,
    value: `Когнітивні навички: Розвиток пам'яті та уваги`,
    desc: ``,
    image: '/assets/images/3.jpg',
    subDesk: '',
    path: '/summer-sale',
  },
];

const servicesMock: ServiceCardProps[] = [
  {
    title: 'Жетонна система',
    description: 'Введення жетоної системи за допомогою якої, дитина зможе відслідкувати тривалість завдання',
    features: [
      {
        title: '',
        items: [
          'Підбір жетонів відповідно до навчальної поведінки дитини',
          'Правильне введення жетонів спеціалістів',
          'Після зібраних жетонів - видаємо мотивацію дитині',
        ],
      },
      // {
      //   title: 'Color Options',
      //   items: [
      //     'Wide range of natural and synthetic dyes',
      //     'Colorfastness guaranteed',
      //   ],
      // },
    ],
  },
  {
    title: 'Співпраця ',
    description: 'Взаємодія дитини з дорослим',
    features: [
      {
        title: '',
        items: [
          'Комфортні умови для навчання',
          'Безпечне середовище',
          'Довіра дитини до дорослого',
        ],
      },
      // {
      //   title: 'Additional Features',
      //   items: [
      //     'Guided tutorials for each design',
      //     'Access to professional tools',
      //   ],
      // },
    ],
  },
  {
    title: 'Спочатку - Потім',
    description: 'Кореція проблемної поведінки і навчання навичок',
    features: [
      {
        title: 'Спочатку - Потім',
        items: [
          'Візуальне відображення того що, любить дитина',
          'Зображення дій або предметів які відображають як завдання так і бажані предмети',
          'Спочатку дія - потім приз',
        ],
      },
      // {
      //   title: '',
      //   items: [
      //     'Введення спочатку - потім пропрацьовує спеціаліст',
      //     '',
      //   ],
      // },
    ],
  },
];

export default async function HomePage() {
  return (
    <>
      <div id="home" className="container mt-32 flex flex-col gap-10">
        <BannerMain />
        <BannerGrid data={mockData} />
      </div>
      <section id="services">
        <Lessons slides={LESSONS_SLIDES} className="js-section text-text-800 sm:pb-20" />
      </section>
      <section id="reviews">
        <Reviews />
      </section>
      <section id="how-it-works" className="container flex flex-col gap-10">
        <FreqQuestion />
      </section>
      <section id="principi">
        <Why />
      </section>
      <section id="structure" className="container flex flex-col gap-10">
        <Services title="Структура заняття" description="" services={servicesMock} />
      </section>
      <section id="contacts" className="container flex flex-col gap-10">
        <MapComponent />
      </section>
    </>
  );
}
