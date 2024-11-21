import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import type { LinkProps as NextLinkProps } from 'next/link';
import Link from 'next/link';
import * as React from 'react';

import type { SvgProps } from '@/components/Sprite';
import { Icon } from '@/components/Sprite/Icon';
import { cn } from '@/libs/cn';

const iconButtonVariants = cva(
  'group inline-flex items-center justify-center rounded  ring-offset-white transition-colors duration-default focus-visible:outline-none  disabled:pointer-events-none disabled:border-transparent disabled:bg-transparent disabled:opacity-20',
  {
    variants: {
      variant: {
        primary: 'border border-surface-secondary-default bg-surface-secondary-default text-text-default hover:bg-surface-secondary-hover',
        secondary:
          'bg-transparent  text-text-default hover:bg-surface-secondary-hover',
        ghost: 'bg-transparent text-text-muted hover:bg-surface-secondary-hover ',
      },
      size: {
        default: 'size-9',
        small: 'size-6',
        circleDefault: 'size-12 p-0',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default',
    },
  },
);

export type IconButtonProps = {
  icon?: SvgProps['name'];
  iconSize?: string;
  asChild?: boolean;
  iconClass?: string;
  href?: string;
  LinkProps?: NextLinkProps;
  target?: string;
  iconWrapperClass?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof iconButtonVariants>;

const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    {
      className,
      variant,
      size,
      icon = 'close',
      asChild = false,
      iconWrapperClass,
      iconSize = 'size-5',
      iconClass,
      href,
      target,
      LinkProps,
      ...props
    },
    ref,
  ) => {
    let Comp: React.ElementType;

    const isLink = !!href;

    if (asChild) {
      Comp = Slot;
    } else if (isLink) {
      Comp = Link;
    } else {
      Comp = 'button';
    }

    const linkProps = isLink ? { href, target, ...LinkProps } : {};
    const buttonProps = isLink ? {} : { ref };

    return (
      <Comp
        className={cn(
          iconButtonVariants({ size, variant, className }),
          props.disabled && 'cursor-not-allowed opacity-50',

        )}
        {...linkProps}
        {...buttonProps}
        {...props}
      >
        <Icon className={cn(iconSize, iconClass)} name={icon} />
      </Comp>
    );
  },
);
IconButton.displayName = 'IconButton';

export { IconButton, iconButtonVariants };
