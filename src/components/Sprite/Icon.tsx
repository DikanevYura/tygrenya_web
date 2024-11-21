import React, { forwardRef } from 'react';

import { cn } from '@/libs/cn';

export type SvgProps = {
  name: 'account_balance' | 'arrow_back' | 'arrow_downward_alt' | 'arrow_drop_down' | 'arrow_drop_down_circle' | 'arrow_forward' | 'autorenew' | 'backspace' | 'block' | 'calendar_today' | 'check_small' | 'chevron_forward' | 'chronic' | 'close' | 'construction' | 'content_copy' | 'do_not_disturb_on' | 'done_all' | 'download' | 'drag_handle' | 'filter_alt' | 'help' | 'info' | 'local_atm' | 'more_vert' | 'swap_vert' | 'visibility' | 'visibility_off';
  size?: string | number;
  className?: string;
  strokeWidth?: string | number;
  absoluteStrokeWidth?: boolean;
};

const Icon = forwardRef<SVGSVGElement, SvgProps>(
  (
    { name, size = 16, strokeWidth = 2, absoluteStrokeWidth, className },
    ref,
  ) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      className={cn('', className)}
      strokeWidth={
        absoluteStrokeWidth
          ? (Number(strokeWidth) * 24) / Number(size)
          : strokeWidth
      }
      name={`#icon-${name}`}
    >
      <use xlinkHref={`#icon-${name}`} />
    </svg>
  ),
);

Icon.displayName = 'Icon';
export { Icon };
