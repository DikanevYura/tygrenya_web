'use client';

import Image from 'next/image';
import Link from 'next/link';

import { cn } from '@/libs/cn';

type BannerProps = {
  data: any;
};

const BannerGrid: React.FC<BannerProps> = ({ data }) => {
  return (
    <div className={cn('lg:my-20 my-3')}>
      <div className="flex flex-wrap gap-4 md:grid md:grid-cols-3 xl:grid-cols-[1fr_2fr_1fr] xl:gap-5">
        {data?.map((item: any, index: number) => (
          <div
            key={`banner-key-${item.id}`}
            className={cn(
              'flex w-full items-center justify-center overflow-hidden rounded group', // moved 'group' class here
              index === 0 && 'md:w-auto',
              index === 1 && '',
              index === 2 && 'md:w-auto',
            )}
          >
            <Link
              href={item.path}
              target="_blank"
              rel="nofollow noindex"
              className={cn(
                'relative flex h-full justify-center overflow-hidden w-full',
                index === 0 && 'h-[300px] md:w-full md:h-[300px]',
                index === 1 && 'w-full h-[155px] md:h-[300px]',
                index === 2 && 'h-[300px] md:w-full md:h-[300px]',
              )}
            >
              <div className="absolute inset-x-0 bottom-0 z-10 flex flex-col items-start justify-center gap-4 px-6 pb-6">
                <div className="flex flex-col">
                  <span className="text-brand mb-2 text-[1.2rem] font-normal">
                    {item.value}
                  </span>
                  <span className="text-brand-light text-[1.7rem] leading-7 lg:leading-[27px]">
                    {item.desc}
                  </span>
                </div>
                <span className="text-md text-brand-light">
                  {item.subDesk}
                </span>
              </div>
              <div
                className={cn(
                  'box-sizing inline-block relative overflow-hidden w-full',
                  index === 0 && 'h-[300px] md:h-[300px]',
                  index === 1 && ' h-[155px] md:h-[300px]',
                  index === 2 && 'h-[300px] md:h-[300px]',
                )}
              >
                <Image
                  src="/assets/images/tugrenya-big-banner.png"
                  alt={item.value}
                  sizes="(min-width: 1880px) 382px, (min-width: 1540px) calc(14.69vw + 109px), (min-width: 1280px) calc(25vw - 26px), (min-width: 780px) calc(32.29vw - 19px), calc(100vw - 32px)"
                  className={cn(
                    'absolute inset-0 rounded-md object-cover min-w-full max-w-full min-h-full max-h-full',
                    index === 0 && 'w-[370px] h-[300px] md:w-full md:h-[300px]',
                    index === 1 && 'w-full h-[155px] md:h-[300px]',
                    index === 2 && 'w-[370px] h-[300px] md:w-full md:h-[300px]',
                  )}
                  height={300}
                  unoptimized
                  width={500}
                />
                <div className="absolute inset-0 bg-black/40" />
              </div>
              {/* Group hover effect */}
              <div className="z-5 group-hover:animate-shine absolute top-0 block h-full w-1/2 -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-30 ltr:-left-full rtl:-right-full" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BannerGrid;
