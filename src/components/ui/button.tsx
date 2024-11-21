import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import type { LinkProps as NextLinkProps } from 'next/link';
import * as React from 'react';

import { cn } from '@/libs/cn';

const buttonVariants = cva(
  'group inline-flex items-center justify-center  whitespace-nowrap rounded-full font-semibold ring-offset-white transition-colors duration-default focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        primary: 'bg-surface-primary-default text-text-inversed hover:bg-surface-primary-hover ',
        secondary:
          'border border-components-stroke-default bg-surface-secondary-default backdrop-blur-lg hover:bg-surface-secondary-hover',

      },
      size: {
        default: 'h-12 px-6',
        small: 'h-[34px] px-4',
      },

    },
    defaultVariants: {
      variant: 'primary',
      size: 'default',
    },
  },
);

export type ButtonProps = {
  asChild?: boolean;
  textColor?: string;
  href?: any;
  LinkProps?: NextLinkProps;
  target?: string;

} & React.ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof buttonVariants>;

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      textColor,
      asChild = false,
      href,
      target,
      type = 'button',
      LinkProps,
      ...props
    },
    ref,
  ) => {
    const isLink = !!href;
    let Comp: React.ElementType;

    if (asChild) {
      Comp = Slot;
    } else {
      Comp = 'button';
    }

    const linkProps = isLink ? { href, target, ...LinkProps } : {};
    const buttonProps = isLink ? {} : { ref, type };

    return (
      <Comp
        className={cn(
          buttonVariants({ size, variant, className }),
          props.disabled && 'cursor-not-allowed opacity-50',
          textColor,
        )}
        {...linkProps}
        {...buttonProps}
        {...props}
      >

        {props.children}
      </Comp>
    );
  },
);
Button.displayName = 'Button';

export { Button, buttonVariants };
