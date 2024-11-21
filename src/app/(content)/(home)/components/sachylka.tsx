'use client';

import Image from 'next/image';
import type { FC } from 'react';

import { cn } from '@/libs/cn';

export const CourseAuthor: FC<{ className?: string }> = ({ className }) => {
  return (
    <section id="author" className={cn('py-8', className)}>
      <div className="my-10 flex flex-col">
        <div className="flex w-full justify-center gap-[96px]">
          <div className="flex w-full max-w-[438px] flex-col items-center justify-center gap-6">

            <h2 className="h2 max-w-[247px] text-text-tugrenya-black">Сашулька</h2>
            <div data-content className="max-w-[335px]">
              <h3 className="mb-3 text-center font-semibold text-text-tugrenya-black opacity-85">
                Сама красива
              </h3>
              <div className="p1 text-center text-text-tugrenya-black opacity-85">
                Бусінка
              </div>
            </div>
          </div>
          <div className="relative flex w-max shrink-0">
            <Image
              src="/assets/images/sashylka.jpg"
              alt="Author logo"
              width={0}
              height={0}
              className="size-[650px] object-cover"
              quality={100}
              sizes="100vh"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
