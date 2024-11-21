'use client';

import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import { Circle } from 'lucide-react';
import * as React from 'react';

import { cn } from '@/libs/cn';

type RadioGroupItemProps = {
  label?: string;
  customLabel?: React.ReactNode;
} & React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>;

const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Root
      className={cn('grid gap-2', className)}
      {...props}
      ref={ref}
    />
  );
});
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;

const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  RadioGroupItemProps
>(({ className, label, customLabel, ...props }, ref) => {
  return (
    <label
      className={cn(
        'flex cursor-pointer group items-center gap-3',
        className,
      )}
    >
      <div className="flex rounded-md p-2 transition-colors duration-default group-hover:bg-surface-secondary-hover">
        <RadioGroupPrimitive.Item
          ref={ref}
          className={cn(
            'aspect-square size-6 bg-surface-secondary-default rounded-full border border-components-stroke-default  ring-offset-white focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-surface-primary-default data-[state=checked]:border-surface-primary-default text-white',
            className,
          )}
          {...props}
        >
          <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
            <Circle className="size-4 fill-current text-text-muted" />
          </RadioGroupPrimitive.Indicator>

        </RadioGroupPrimitive.Item>
      </div>
      {label && <span className="paragraph-m-semibold">{label}</span>}
      {customLabel && customLabel}
    </label>
  );
});
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;

export { RadioGroup, RadioGroupItem };
