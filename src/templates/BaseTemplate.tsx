import { cn } from '@/libs/cn';

const BaseTemplate = (props: {
  header?: React.ReactNode;
  children: React.ReactNode;
  footer?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn('flex min-h-svh flex-col justify-start', props.className)}
    >
      {props.header}

      <main className="flex grow flex-col">{props.children}</main>

      {props.footer}
    </div>
  );
};

export { BaseTemplate };
