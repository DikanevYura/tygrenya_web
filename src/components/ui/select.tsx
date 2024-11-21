'use client';

import React, { type FC, useCallback, useMemo, useState } from 'react';

import { useMediaQuery } from '@/hooks';

import { Icon, type SvgProps } from '../Sprite';
import {
  Button,
  Command,
  CommandItem,
  CommandList,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  Drawer,
  DrawerContent,
  DrawerTrigger,
  IconButton,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '.';

type OptionProps = {
  value: string;
  label: string;
  subItems?: OptionProps[];
};

type SelectProps = {
  placeholder?: string;
  values?: string[];
  onSelect: (values: string[]) => void;
  icon?: SvgProps['name'];
  options: OptionProps[];
  isMultiple?: boolean;
  mobileDrawerTitle?: string;
  align?: 'start' | 'center' | 'end';
  sideOffset?: number;
  side?: 'top' | 'right' | 'bottom' | 'left';
};

const defaultOptions: OptionProps[] = [];
const defaultValues: string[] = [];

const Select: FC<SelectProps> = ({
  placeholder,
  onSelect,
  values = defaultValues,
  options = defaultOptions,
  icon = 'close',
  isMultiple = false,
  mobileDrawerTitle,
  align = 'start',
  sideOffset = 4,
  side,
}) => {
  const [selectedValues, setSelectedValues] = useState<string[]>(values);
  const [open, setOpen] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const [selectedOption, setSelectedOption] = useState<OptionProps>();
  const [subDrawerOpen, setSubDrawerOpen] = useState(false);
  const [tempSelectedValues, setTempSelectedValues] = useState<string[]>([]);

  const handleSelect = useCallback((value: string) => {
    if (!isMultiple) {
      onSelect([value]);
      setOpen(false);
      setSelectedValues([value]);
      return;
    }

    setSelectedValues((prev) => {
      const isSelected = prev.includes(value);
      const newSelectedValues = isSelected
        ? prev.filter(v => v !== value)
        : [...prev, value];

      onSelect(newSelectedValues);
      return newSelectedValues;
    });
  }, [isMultiple, onSelect]);

  const handleTempSelect = useCallback((value: string) => {
    setTempSelectedValues(prev =>
      prev.includes(value) ? prev.filter(v => v !== value) : [...prev, value],
    );
  }, []);

  const handleOneTempSelect = useCallback((value: string) => {
    setTempSelectedValues([value]);
  }, []);

  const saveSelections = useCallback(() => {
    setSelectedValues(tempSelectedValues);
    setSubDrawerOpen(false);
    setOpen(false);
    onSelect(tempSelectedValues);
  }, [onSelect, tempSelectedValues]);

  const findSelectedLabels = useMemo(() => {
    if (isMultiple) {
      return selectedValues.length > 0
        ? (
            <div className="flex items-center gap-2">
              <span className="hidden md:flex">
                Фільтри
              </span>
              <span className="paragraph-xs-bold flex size-6 items-center justify-center rounded-full bg-surface-secondary-default">
                {selectedValues.length}
              </span>
            </div>
          )
        : (
            <span className="hidden  md:flex">
              {placeholder}
            </span>

          );
    }

    const selectedOption = options.find(option => option.value === selectedValues[0]);

    return selectedOption?.label || placeholder
      ? (
          <span className="hidden md:flex">
            {selectedOption?.label || placeholder}
          </span>
        )
      : null;
  }, [isMultiple, mobileDrawerTitle, options, placeholder, selectedValues]);

  const renderCommandItem = useCallback((option: OptionProps) => (
    <React.Fragment key={option.value}>
      {option.subItems
        ? (
            <Popover>
              <PopoverTrigger className="relative flex w-[234px] grow cursor-pointer select-none items-center justify-between px-4 py-3 outline-none transition-colors duration-default first:rounded-t-xl last:rounded-b-xl hover:bg-surface-secondary-hover data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 [&:not(:last-child)]:mb-1">
                {option.label}
                <Icon name="chevron_forward" size={20} className="text-text-muted" />
              </PopoverTrigger>
              <PopoverContent sideOffset={4} align="start" side="right">
                {option.subItems.map(subItem => (
                  <CommandItem
                    className="flex w-[234px] grow items-center justify-between"
                    key={subItem.value}
                    onSelect={() => handleSelect(subItem.value)}
                  >
                    <>
                      {subItem.label}
                      {selectedValues.includes(subItem.value) && <Icon name="check_small" size={20} className="text-text-muted" />}
                    </>
                  </CommandItem>
                ))}
              </PopoverContent>
            </Popover>
          )
        : (
            <CommandItem
              className="flex w-[234px] grow items-center justify-between"
              key={option.value}
              onSelect={() => handleSelect(option.value)}
            >
              <>
                {option.label}
                {selectedValues.includes(option.value) && <Icon name="check_small" size={20} className="text-text-muted" />}
              </>
            </CommandItem>
          )}
    </React.Fragment>
  ), [handleSelect, selectedValues]);

  const renderDrawerContent = useMemo(() => (
    <DrawerContent>
      <DialogHeader className="flex items-center justify-between">
        <DialogTitle>
          {
            selectedOption?.label
          }
        </DialogTitle>
        <IconButton
          onClick={
            () => setSubDrawerOpen(false)
          }
          icon="close"
          variant="primary"
        />
      </DialogHeader>
      <Command>
        <CommandList className="pb-10 pt-6">
          {selectedOption?.subItems?.map(subItem => (
            <CommandItem
              className="relative flex grow cursor-pointer select-none items-center justify-between !rounded-none border-components-stroke-default px-8 py-4 outline-none transition-colors  duration-default last:border-b-0 hover:bg-surface-secondary-hover data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 [&:not(:last-child)]:border-b"
              key={subItem.value}
              onSelect={() => handleTempSelect(subItem.value)}
            >
              <>
                {subItem.label}
                {tempSelectedValues.includes(subItem.value) && (
                  <Icon name="check_small" size={20} className="text-text-muted" />
                )}
              </>
            </CommandItem>
          ))}
        </CommandList>
      </Command>
      <DialogFooter>
        <Button onClick={() => setSubDrawerOpen(false)} variant="secondary" className="w-full">Відмінити</Button>
        <Button onClick={saveSelections} type="submit" className="w-full">Зберегти</Button>
      </DialogFooter>
    </DrawerContent>
  ), [handleTempSelect, saveSelections, selectedOption, tempSelectedValues]);

  const renderPopoverContent = useMemo(() => (
    <PopoverContent sideOffset={sideOffset} align={align} side={side}>
      <Command>
        <CommandList>
          {options.map(renderCommandItem)}
        </CommandList>
      </Command>
    </PopoverContent>
  ), [options, renderCommandItem]);

  const multipleWithSelectedValues = selectedValues.length > 0 && isMultiple;

  if (!isMobile) {
    return (
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button variant="secondary" className="gap-2 px-4">
            {findSelectedLabels}
            {!multipleWithSelectedValues && (
              <Icon name={icon} size={20} className="text-text-muted" />
            )}
          </Button>
        </PopoverTrigger>
        {renderPopoverContent}
      </Popover>
    );
  }

  return (
    <Drawer
      open={open}
      onOpenChange={(isOpen) => {
        setOpen(isOpen);
        if (isOpen) {
          setTempSelectedValues(selectedValues);
        }
      }}
    >
      <DrawerTrigger asChild>
        <Button variant="secondary" className="gap-2 px-4">
          {findSelectedLabels}

          <Icon name={icon} size={20} className="text-text-muted" />

        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DialogHeader className="flex items-center justify-between">
          <DialogTitle>
            {mobileDrawerTitle}
          </DialogTitle>
          <IconButton
            onClick={
              () => setOpen(false)
            }
            icon="close"
            variant="primary"
          />
        </DialogHeader>
        <Command>
          <CommandList className="pb-10 ">
            {options.map(option => (
              <React.Fragment key={option.value}>
                {option.subItems
                  ? (
                      <CommandItem
                        className="relative flex grow cursor-pointer select-none items-center justify-between !rounded-none px-8 py-4 outline-none transition-colors duration-default  hover:bg-surface-secondary-hover data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 [&:not(:last-child)]:border-b [&:not(:last-child)]:border-components-stroke-default"
                        onSelect={() => {
                          setSelectedOption(option);
                          setTempSelectedValues([...selectedValues]);
                          setSubDrawerOpen(true);
                        }}
                      >
                        {option.label}
                        <Icon name="chevron_forward" size={20} className="text-text-muted" />
                      </CommandItem>
                    )
                  : (
                      <CommandItem
                        className="relative flex grow cursor-pointer select-none items-center justify-between !rounded-none  px-8 py-4 outline-none transition-colors  duration-default hover:bg-surface-secondary-hover data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50"
                        key={option.value}
                        onSelect={() => {
                          handleOneTempSelect(option.value);
                        }}
                      >
                        <>
                          {option.label}
                          {tempSelectedValues.includes(option.value) && (
                            <Icon name="check_small" size={20} className="text-text-muted" />
                          )}
                        </>
                      </CommandItem>
                    )}
              </React.Fragment>
            ))}
          </CommandList>
        </Command>
        <DialogFooter>
          <Button onClick={() => setOpen(false)} variant="secondary" className="w-full">Відмінити</Button>
          <Button onClick={saveSelections} type="submit" className="w-full">Зберегти</Button>
        </DialogFooter>
      </DrawerContent>
      <Drawer open={subDrawerOpen} onOpenChange={setSubDrawerOpen}>
        {renderDrawerContent}
      </Drawer>
    </Drawer>
  );
};

export { Select };
