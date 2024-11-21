'use client';

import React, { forwardRef, useEffect, useRef, useState } from 'react';

import { cn } from '@/libs/cn';

import { IconButton } from './iconButton';

export type InputProps = {
  label?: string;
  inputClassName?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, inputClassName, type, label, value, onChange, ...props }, ref) => {
    const [inputValue, setInputValue] = useState(value || '');
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const isPasswordType = type === 'password';
    const inputType = isPasswordType && isPasswordVisible ? 'text' : type;
    const inputRef = useRef<HTMLInputElement>(null);

    const combinedRef = (ref as any) || inputRef;

    const togglePasswordVisibility = () => {
      setIsPasswordVisible(prev => !prev);
    };

    useEffect(() => {
      setInputValue(value || '');
    }, [value]);

    const handleChange = (val: string) => {
      setInputValue(val);
      if (onChange) {
        onChange({
          target: {
            value: val,
          },
        } as React.ChangeEvent<HTMLInputElement>);
      }
    };

    return (
      <div
        className={cn(
          ' relative flex overflow-hidden flex-col gap-3 border-components-stroke-default border rounded-xl backdrop-blur-lg bg-surface-secondary-default h-[72px] hover:bg-surface-secondary-hover transition-colors duration-default',
          className,
        )}
      >
        <input
          className={cn(
            'input focus-visible:outline-none !bg-transparent border-none size-full px-6 font-bold text-text-default',
            inputValue && label && 'pb-3 pt-10',
            inputClassName,
          )}
          type={inputType}
          id={props.id}
          value={inputValue}
          onChange={(e: any) => handleChange(e.target.value)}
          ref={combinedRef}
          autoComplete="off"
          {...props}
        />
        {
          label && (
            <label
              htmlFor={props.id}
              className={cn(
                'input-label absolute left-6 cursor-text font-semibold top-1/2 text-text-muted transition-all duration-default -translate-y-1/2',
                inputValue && label && 'top-5',
              )}
            >
              {label}
            </label>
          )
        }

        {isPasswordType && (
          <IconButton
            variant="ghost"
            icon={isPasswordVisible ? 'visibility' : 'visibility_off'}
            className="absolute right-6 top-1/2 -translate-y-1/2 cursor-pointer"
            onClick={togglePasswordVisibility}
            tabIndex={-1}
            type="button"
          />
        )}
      </div>
    );
  },
);

Input.displayName = 'Input';

export { Input };
