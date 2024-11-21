'use client';

import * as TabsPrimitive from '@radix-ui/react-tabs';
import { motion } from 'framer-motion';
import * as React from 'react';

import { cn } from '@/libs/cn';

const Tabs = TabsPrimitive.Root;

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      'flex items-center justify-center border border-components-stroke-default rounded-xl p-[1px] w-full overflow-hidden gap-1 bg-surface-secondary-default',
      className,
    )}
    {...props}
  />
));
TabsList.displayName = TabsPrimitive.List.displayName;

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  {
    isActive?: boolean;
    motionLayoutId?: string;
  } &
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, isActive, motionLayoutId, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      'flex w-full rounded-[10px] px-2 py-4 bg-transparent text-text-muted font-semibold items-center justify-center whitespace-nowrap  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50  data-[state=active]:text-white hover:bg-surface-secondary-hover transition-colors duration-200 hover:data-[state=active]:bg-transparent relative',
      className,
    )}
    {...props}
  >
    {
      isActive && (
        <motion.div
          layoutId={motionLayoutId}
          transition={{ type: 'spring', bounce: 0.2, duration: 0.7 }}
          className={cn(
            'absolute inset-0 bg-surface-selected rounded-[10px]',
          )}
        />
      )
    }

    {props.children}
  </TabsPrimitive.Trigger>
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      'mt-2 ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2',
      className,
    )}
    {...props}
  />
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

export { Tabs, TabsContent, TabsList, TabsTrigger };
