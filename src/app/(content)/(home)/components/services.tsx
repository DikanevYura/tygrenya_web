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
      className="relative flex w-full flex-col gap-0 py-16 md:gap-14 md:py-20"
      id="services"
    >
      <div className="mx-auto flex w-full max-w-[560px] flex-col items-center justify-center gap-4 text-center text-text-tugrenya-black md:gap-3">
        <h2>{title}</h2>
        <p className="subheading leading-tight">{description}</p>
      </div>
      <div className="mt-14 w-full items-start md:mt-0">
        <div className="grid-auto-rows-[1fr] mx-auto grid grid-cols-1 items-start gap-8 md:grid-cols-2 ">
          {services.map((service, idx) => (
            <div
              key={`service-${idx}`}
              className={idx === 0 ? 'col-span-1 md:col-span-2 ' : 'h-full'}
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
