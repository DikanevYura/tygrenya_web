import type { FC } from 'react';

import { cn } from '@/libs/cn';

type DecorCircleProps = {
  className?: string;
  color: 'blue' | 'orange';
};

const DecorCircle: FC<DecorCircleProps> = ({
  className = '',
  color,
}) => {
  return (
    <div className={cn('pointer-events-none absolute  h-[289px] w-[368px] animate-decor-circle  blur-[200px] will-change-auto ', color === 'blue' ? 'bg-[#fde1b1]' : 'bg-[#5c3737]', className)} />
  );
};

export { DecorCircle };
