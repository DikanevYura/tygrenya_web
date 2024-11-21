import type { FC } from 'react';

import { cn } from '@/libs/cn';

type DividerProps = {
  className?: string;
};

const Divider: FC<DividerProps> = ({ className }) => {
  return <div className={cn('h-px bg-surface-secondary-hover my-2', className)} />;
};

export { Divider };
