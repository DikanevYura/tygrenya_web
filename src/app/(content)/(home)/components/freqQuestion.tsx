'use client';

import type { FC } from 'react';
import React, { useState } from 'react';

import Accordion from '@/components/Accordion';
import { cn } from '@/libs/cn';

const mockFreqQuestions = [
  {
    id: 1,
    title: 'Що таке АВА-терапія?',
    content:
      'АВА-терапія, або прикладний аналіз поведінки (Applied Behavioral Analysis), є одним із провідних методів корекції поведінки, особливо для дітей з розладами аутистичного спектра (РАС). Ця методика фокусується на зміні поведінки через позитивне підкріплення, що дозволяє дітям навчатися адаптивним навичкам та зменшувати небажану поведінку.',
  },
  {
    id: 2,
    title:
      'Як уникнути небажаної поведінки?',
    content:
      'Використання позитивного підкріплення, тобто винагорода та похвала за виконане завдання, демонстрація бажаної поведінки, коли батьки на прикладі показують як правильно взаємодіяти з іншими. Також використання соціальних ігор для практики комунікації з однолітками та емоційна підтримка',
  },
  {
    id: 3,
    title:
      'Що таке альтернативна комунікація? (PECS)',
    content:
      'Система альтернативної комунікації PECS  є ефективним методом для дітей з аутизмом, які мають труднощі у вербальному спілкуванні. Вона дозволяє дітям виражати свої потреби та бажання через використання карток із зображеннями.',
  },
  {
    id: 4,
    title: 'Самостійна діяльність дітей з аутизмом або РАС.',
    content:
      'Самостійна діяльність допомагає покращити комунікативні навички, соціальну адаптацію та загальну якість життя. Створення структурованого середовища є критично важливим для дітей з аутизмом. Це включає чіткий розклад дня, що допомагає дітям зрозуміти, що відбуватиметься далі, і які є очікування. Використання візуальних підказок, таких як схеми або картки зображень, може полегшити розуміння послідовності дій.',
  },
  {
    id: 5,
    title: 'Які проблеми вирішує АВА терапія?',
    content: [
      '· Проблемка поведінка',
      <br key={`mockFreqQuestions__${1}`} />,
      '· Ускладнений розвиток комунікації',
      <br key={`mockFreqQuestions__${2}`} />,
      '· Соціалізація',
      <br key={`mockFreqQuestions__${3}`} />,
      '· Розвиток нових навичок відповідно до віку дитини',
    ],
  },
  // {
  //   id: 6,
  //   title:
  //     'Хочу придбати навчання у подарунок, проте не знаю імейлу людини, якій хочу зробити приємно.',
  //   content: [
  //     'Не біда, є інший шлях: ви пропускаєте графу з імейлом і проводите оплату. Після цього на екрані зʼявиться посилання, що веде у бот з навчанням. Вам потрібно буде скопіювати його НЕ ВІДКРИВАЮЧИ і самостійно переслати отримувачу.',
  //     <br key={`mockFreqQuestions__${1}`} />,
  //     <br key={`mockFreqQuestions__${2}`} />,
  //     'Важлива примітка: посилання активне лише на один перехід. Тож будьте уважні, якщо хочете дарувати курс. У разі, якщо лінк було активовано на вашому пристрої, в іншої людини він уже не працюватиме. Цей доступ лишиться у вас, а подарунок доведеться придбати знову.',
  //   ],
  // },
  // {
  //   id: 7,
  //   title:
  //     'Я купив навчання у подарунок, але випадково сам активував посилання. Що робити?',
  //   content: [
  //     'У разі придбання доступу до «Оливкової вишиванки» у якості подарунку, після оплати ви отримаєте повідомлення з посиланням, що надає доступ до навчання. Його потрібно переслати отримувачу не відкриваючи. ',
  //     <br key={`mockFreqQuestions__${3}`} />,
  //     <br key={`mockFreqQuestions__${4}`} />,
  //     'Оскільки лінк можливо активувати лише один раз, його не слід відкривати на своєму телефоні, якщо ви все ж плануєте дарувати курс. Бо в наступного користувача посилання просто не спрацює. ',
  //     <br key={`mockFreqQuestions__${5}`} />,
  //     <br key={`mockFreqQuestions__${6}`} />,
  //     'Якщо ж така халепа всеж сталася і ви запустили бот, вороття немає, курс тепер ваш. А подарунок потрібно буде придбати знову.',
  //     <br key={`mockFreqQuestions__${7}`} />,
  //     <br key={`mockFreqQuestions__${8}`} />,
  //     'Але спершу напишіть в тех підтримку @контакт, вони дадуть знижку, щоб вам не було так сумно робити покупку вдруге!',
  //   ],
  // },
  // {
  //   id: 8,
  //   title: 'На якій платформі проходить навчання?',
  //   content:
  //     'Після оплати ми запросимо вас перейти до Телеграм. А там уже чекає доброзичливий ОливкоБот. Його було спеціально створено з метою максимально спростити процес навчання. За вашою командою ОливкоБот неґайно видаватиме потрібні відео та додаткові матеріали. Без зайвих реєстрацій і зависаючих сайтів. Все під рукою в одному місці.',
  // },
];

export const FreqQuestion: FC<{ className?: string }> = ({ className }) => {
  const [expandedIds, setExpandedIds] = useState<number[]>(() => {
    const defaultExpandedId
      = mockFreqQuestions.length > 0 ? mockFreqQuestions[0]?.id : null;
    return defaultExpandedId ? [defaultExpandedId] : [];
  });

  const toggleAccordion = (accordionId: number) => {
    setExpandedIds((prevExpandedIds) => {
      if (prevExpandedIds.includes(accordionId)) {
        return prevExpandedIds;
      }
      return [...prevExpandedIds, accordionId];
    });
  };

  return (
    <section id="faq" className={cn('overflow-hidden', className)}>
      <div className="container flex flex-col gap-5 py-12">
        <h2 className="h2 text-text-tugrenya-black">Часті запитання</h2>
        <div data-content className="flex flex-col">
          {mockFreqQuestions.map(accordionItem => (
            <Accordion
              key={`Accordion_${accordionItem.id}`}
              item={accordionItem}
              isExpanded={expandedIds.includes(accordionItem.id)}
              toggleAccordion={toggleAccordion}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
