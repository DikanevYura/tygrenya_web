'use client';

import { useTheme } from 'next-themes';
import { Toaster as Sonner } from 'sonner';

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = 'system' } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps['theme']}
      offset="24px"
      duration={3000}
      toastOptions={{
        classNames: {
          toast:
            'group toast bg-surface-default border border-components-stroke-default backdrop-blur-xl px-6 py-4 rounded-md md:max-w-[360px] w-full ',
          content: 'gap-1',
          title: 'paragraph-s-medium ',
          description: 'paragraph-xs-regular text-text-muted',
          actionButton:
            'bg-slate-900 text-slate-50 ',
          cancelButton:
            'bg-slate-100 text-slate-500 ',
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
