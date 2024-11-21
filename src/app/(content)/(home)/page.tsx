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
    image: '/assets/images/tugrenya-big-banner.png',
    title: 'Урок перший',
    description:
      'Де ми роззнайомимося та оглянемо всі матеріали, які можуть знадобитися у вишиванні. Ти матимеш комплексне уявлення про те, як і де обрати для себе найкраще приладдя.',
  },
  {
    id: 2,
    image: '/assets/images/tugrenya-big-banner.png',
    title: 'Другий урок',
    description:
      'На другому уроці поговоримо про хрестик. Ти дізнаєшся як хрестик потрапив в Україну і освоїш дві техніки його виконання. Відео наглядно пояснює технологію виконання стібку та закріплення нитки. А в кінці уроку на тебе чекатиме безліч маленьких тренувальних схем хрестиком на твій вибір!',
  },
  {
    id: 3,
    image: '/assets/images/tugrenya-big-banner.png',
    title: 'Урок третій',
    description:
      'Ти дізнаєшся про два способи виготовлення вишитої сорочки. Відео містить огляд усіх важливих деталей під час роботи з заготовкою для сорочки: як обрати найкращу, на що звернути увагу при вишиванні, що означає символіка вишитого візерунку?',
  },
  {
    id: 4,
    image: '/assets/images/tugrenya-big-banner.png',
    title: 'Урок четвертий',
    description:
      'Де ми поетапно створюємо вишиванку з нуля. Відео містить вказівки та поради щодо вибору тканини, виконанню попереднього крою, нанесенню розмітки для орнаменту. Також ти дізнаєшся про три способи перенесення малюнку на тканину і зможеш обрати підходящу опцію для себе.',
  },
  {
    id: 5,
    image: '/assets/images/tugrenya-big-banner.png',
    title: 'П\'ятий урок',
    description:
      'Поговоримо про невідʼємну частину шляху кожної майстрині – помилки. Ти дізнаєшся про все, що може піти не так у вишиванні сорочки і як цього уникнути. ',
  },
];

const mockData = [
  {
    id: 1,
    value: 'Special Offer',
    desc: 'Up to 50% Off on Selected Items',
    subDesk: 'Limited time only!',
    path: '/special-offer',
  },
  {
    id: 2,
    value: 'New Collection',
    desc: 'Discover Our Latest Arrivals',
    subDesk: 'Available now!',
    path: '/new-collection',
  },
  {
    id: 3,
    value: 'Summer Sale',
    desc: 'Huge Discounts on Summer Styles',
    subDesk: 'Don\'t miss out!',
    path: '/summer-sale',
  },
];

const servicesMock: ServiceCardProps[] = [
  {
    title: 'Custom Embroidery Designs',
    description: 'Create personalized embroidery patterns to suit your style and preferences.',
    features: [
      {
        title: 'Design Options',
        items: [
          'Choose from hundreds of templates',
          'Customizable color schemes',
          'Adjustable stitch patterns',
        ],
      },
      {
        title: 'Additional Features',
        items: [
          'Guided tutorials for each design',
          'Access to professional tools',
        ],
      },
    ],
  },
  {
    title: 'High-Quality Materials',
    description: 'Only the best materials are used to ensure durability and vibrant colors.',
    features: [
      {
        title: 'Material Choices',
        items: [
          '100% cotton threads',
          'Pre-washed fabrics',
          'Variety of fabric textures and thicknesses',
        ],
      },
      {
        title: 'Color Options',
        items: [
          'Wide range of natural and synthetic dyes',
          'Colorfastness guaranteed',
        ],
      },
    ],
  },
  {
    title: 'Expert Guidance',
    description: 'Learn from professionals with years of experience in traditional embroidery.',
    features: [
      {
        title: 'Training Sessions',
        items: [
          'One-on-one video lessons',
          'Workshops for advanced techniques',
        ],
      },
      {
        title: 'Resources',
        items: [
          'Access to exclusive patterns and designs',
          'Tips for troubleshooting common mistakes',
        ],
      },
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
      <section id="why">
        <Why />
      </section>
      <section id="Services" className="container flex flex-col gap-10">
        <Services title="Текст" description="Опис" services={servicesMock} />
      </section>
      <section id="contacts" className="container flex flex-col gap-10">
        <MapComponent />
      </section>
    </>
  );
}
