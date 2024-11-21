/* eslint-disable react/no-array-index-key */
'use client';

import type { FC } from 'react';

import { Divider, Icon } from '@/components';
import { cn } from '@/libs/cn';

export type ServiceCardProps = {
  title: string;
  description?: string;
  features: {
    title?: string;
    items: string[];
  }[];
};

const ServiceCard: FC<ServiceCardProps> = ({
  title,
  description,
  features,
}) => {
  return (
    <div className="flex size-full  flex-col gap-6 rounded-xl border  border-components-stroke-default bg-text-tugrenya-black px-6 py-8 lg:gap-10 lg:p-8 ">
      <div className="flex items-center justify-between gap-10 md:min-h-[70px]">
        <div className="flex flex-col gap-2">
          <h3>{title}</h3>
          {description && <p className="paragraph-m-semibold">{description}</p>}
        </div>
      </div>
      <Divider className="m-0" />
      <div className="flex h-full flex-col justify-between gap-6 lg:gap-8">
        <div className="flex flex-col justify-between gap-6 pb-4 md:flex-row lg:gap-20 lg:pb-8">
          {features.map(feature => (
            <div
              key={`feature-${feature.title}`}
              className="flex w-full flex-col gap-6 md:gap-4"
            >
              {features.length > 1 && (
                <b className={cn(feature.title === '' && 'hidden md:flex h-3')}>
                  {feature.title}
                </b>
              )}

              <ul className="flex flex-col gap-4">
                {feature.items.map((item, itemIdx) => (
                  <li
                    key={`item-${itemIdx}`}
                    className="flex items-center gap-4"
                  >
                    <Icon
                      name="check_small"
                      size={20}
                      className="shrink-0 text-text-muted"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export { ServiceCard };
