import { BannerMain } from './components/bannerMain';
import { FreqQuestion } from './components/freqQuestion';
import { MapComponent } from './components/map';
import { Lessons } from './components/our-features';
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
    image: '/assets/images/9.jpg',
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
      `Підготовка до школи є критично важливим етапом у розвитку дитини. Вона включає в себе:
- Розвиток графомоторних навичок: Діти вчаться писати та малювати, що є основою для подальшого навчання.
- Соціально-побутові навички: Діти повинні навчитися взаємодіяти з однолітками та дорослими, дотримуватися правил і розпорядку дня.
- Імітаційні ігри: Наприклад, проведення ігор на зразок "Мій перший день у школі" допомагає дітям адаптуватися до шкільного середовища.
`,
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

// const servicesMock: ServiceCardProps[] = [
//   {
//     title: 'Custom Embroidery Designs',
//     description: 'Create personalized embroidery patterns to suit your style and preferences.',
//     features: [
//       {
//         title: 'Design Options',
//         items: [
//           'Choose from hundreds of templates',
//           'Customizable color schemes',
//           'Adjustable stitch patterns',
//         ],
//       },
//       {
//         title: 'Additional Features',
//         items: [
//           'Guided tutorials for each design',
//           'Access to professional tools',
//         ],
//       },
//     ],
//   },
//   {
//     title: 'High-Quality Materials',
//     description: 'Only the best materials are used to ensure durability and vibrant colors.',
//     features: [
//       {
//         title: 'Material Choices',
//         items: [
//           '100% cotton threads',
//           'Pre-washed fabrics',
//           'Variety of fabric textures and thicknesses',
//         ],
//       },
//       {
//         title: 'Color Options',
//         items: [
//           'Wide range of natural and synthetic dyes',
//           'Colorfastness guaranteed',
//         ],
//       },
//     ],
//   },
//   {
//     title: 'Expert Guidance',
//     description: 'Learn from professionals with years of experience in traditional embroidery.',
//     features: [
//       {
//         title: 'Training Sessions',
//         items: [
//           'One-on-one video lessons',
//           'Workshops for advanced techniques',
//         ],
//       },
//       {
//         title: 'Resources',
//         items: [
//           'Access to exclusive patterns and designs',
//           'Tips for troubleshooting common mistakes',
//         ],
//       },
//     ],
//   },
// ];

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
      {/* <section id="reviews">
        <Reviews />
      </section> */}
      <section id="how-it-works" className="container flex flex-col gap-10">
        <FreqQuestion />
      </section>
      <section id="why">
        <Why />
      </section>
      {/* <section id="Services" className="container flex flex-col gap-10">
        <Services title="Текст" description="Опис" services={servicesMock} />
      </section> */}
      <section id="contacts" className="container flex flex-col gap-10">
        <MapComponent />
      </section>
    </>
  );
}
