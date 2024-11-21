'use client';

import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import * as React from 'react';

import { Icon } from '@/components/Sprite';
import { cn } from '@/libs/cn';

type CheckboxProps = {
  label?: string;
  value?: string;
  customLabel?: React.ReactNode;
} & React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>;

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  CheckboxProps
>(({ className, label, value, customLabel, ...props }, ref) => (
  <label
    className={cn(
      'flex cursor-pointer group items-center gap-3',
      className,
    )}
  >
    <div className="flex items-center">
      <div className="flex rounded-md p-2 transition-colors duration-default group-hover:bg-surface-secondary-hover">
        <CheckboxPrimitive.Root
          ref={ref}
          value={value}
          className={cn(
            'peer size-6  shrink-0 rounded-sm border flex bg-surface-secondary-default items-center justify-center border-components-stroke-default   disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-surface-primary-default data-[state=checked]:border-surface-primary-default text-white',
          )}
          {...props}
        >
          <CheckboxPrimitive.Indicator
            className={cn('flex items-center justify-center text-text-inversed')}
          >
            <Icon name="check_small" size={24} />
          </CheckboxPrimitive.Indicator>
        </CheckboxPrimitive.Root>
      </div>

    </div>
    {label && <span className="paragraph-m-semibold">{label}</span>}
    {customLabel && customLabel}
  </label>
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
