import type { FC } from 'react';

import { cn } from '@/libs/cn';

type ReviewItemProps = {
  className?: string;
  item: any;
};

export const ReviewItem: FC<ReviewItemProps> = ({ className, item }) => {
  return (
    <div
      className={cn(
        'flex flex-col h-full justify-center max-w-[287px] w-full gap-4 mx-3',
        className,
      )}
    >
      <div className="p1 text-text-700 rounded-xl bg-white/85 px-4 py-2.5">
        <div className="line-clamp-[14]">{item.comment}</div>
      </div>
      <div className="flex flex-col items-center gap-3">
        {/* <div className="relative size-[128px] overflow-hidden rounded-full">
          <Image
            fill
            src={`/assets/images/reviews/${item.src}`}
            alt={item.name}
            className="absolute left-0 top-0 size-full object-cover"
            quality={85}
          />
        </div> */}
        <div className="flex flex-col text-center">
          <p className="text-text-600">{item.name}</p>
          {/* <p className="p1 text-lightGray">
            {item.instagram
              ? (
                  `@${item.instagram}`
                )
              : (
                  <span className="opacity-0">not</span>
                )}
          </p> */}
        </div>
      </div>
    </div>
  );
};
