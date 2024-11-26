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
        'flex flex-col h-full justify-center bg-text-tugrenya-white/[0.9] rounded-md max-w-[323px] w-full gap-4 mx-3',
        className,
      )}
    >
      <div className="p1 rounded-xl px-4 py-2.5 text-text-tugrenya-black">
        <div className="line-clamp-[14]">{item.comment}</div>
      </div>
    </div>
  );
};
