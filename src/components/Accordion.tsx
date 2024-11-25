import React from 'react';

import { Icon } from '@/components/Sprite';
import { cn } from '@/libs/cn';

type CollapseProps = {
  item: any;
  isExpanded: boolean;
  toggleAccordion: (accordionId: number) => void;
};

export const Accordion: React.FC<CollapseProps> = ({
  item,
  isExpanded,
  toggleAccordion,
}) => {
  const { id, title, content } = item;

  const handleClick = () => {
    toggleAccordion(id);
  };

  return (
    <div
      id={`accordion-collapse-${id}`}
      data-accordion="collapse"
      className="border-lightGray/20 border-t-2 py-3"
    >
      <h4 id={`accordion-collapse-heading-${id}`}>
        <button
          type="button"
          className="flex w-full items-center justify-between text-start text-base font-semibold leading-5 text-text-tugrenya-black opacity-80"
          onClick={handleClick}
          aria-expanded={isExpanded ? 'true' : 'false'}
          aria-controls={`accordion-collapse-body-${id}`}
        >
          <span className="max-w-[calc(100%_-_10.7%)] text-xl">{title}</span>
          <Icon
            name="arrow_drop_down"
            className={cn(
              'size-6 shrink-0 text-current-color transition-all duration-500',
              isExpanded ? '-rotate-90' : '',
            )}
          />
        </button>
      </h4>
      <div
        id={`accordion-collapse-body-${id}`}
        className={cn(isExpanded ? 'block' : 'hidden')}
        aria-labelledby={`accordion-collapse-heading-${id}`}
      >
        <div className="w-full max-w-[calc(100%_-_10.7%)] pt-3 text-base font-normal leading-5 text-text-tugrenya-black opacity-75">
          <p className="text-[18px]">{content}</p>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
