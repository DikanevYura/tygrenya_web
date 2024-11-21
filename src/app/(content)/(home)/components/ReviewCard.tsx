import type { FC } from 'react';

type ReviewCardProps = {
  author: string;
  content: string;
  transactionsText: string;
};

export const ReviewCard: FC<ReviewCardProps> = ({
  author,
  content,
  transactionsText,
}) => {
  return (
    <div className="flex flex-col items-center rounded-xl border border-components-stroke-default bg-surface-secondary-default p-6 backdrop-blur-md">
      <p className="text-center">{content}</p>
      <div className="mt-5 flex flex-col items-center gap-[2px]">
        <span className="paragraph-xs-bold">{author}</span>
        <span className="paragraph-xs-regular text-text-muted">{transactionsText}</span>
      </div>
    </div>
  );
};
