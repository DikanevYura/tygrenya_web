/* eslint-disable react/no-array-index-key */
'use client';

import type { FC } from 'react';

import { ServiceCard, type ServiceCardProps } from '@/components/ui/services-card';

export type ServicesProps = {
  title: string;
  description: string;
  services: ServiceCardProps[];
};

const Services: FC<ServicesProps> = ({ title, description, services }) => {
  return (
    <div
      className="relative flex w-full flex-col gap-0 py-16 md:gap-10 md:py-20"
      id="services"
    >
      <div className="mx-auto flex w-full max-w-[560px] flex-col items-center justify-center gap-4 text-center text-text-tugrenya-black md:gap-3">
        <h2>{title}</h2>
        <p className="leading-tight">{description}</p>
      </div>
      <div className="mt-14 max-h-[412px] w-full items-start md:mt-0">
        <div className="mx-auto flex size-full flex-col items-start gap-8 md:grid-cols-2 md:flex-row ">
          {services.map((service, idx) => (
            <div
              key={`service-${idx}`}
              className={idx === 1 ? 'h-full max-w-full md:h-[412px]' : 'h-full max-w-full md:h-[412px] md:max-w-[350px]'}
            >
              <ServiceCard {...service} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export { Services };
