import clsx from 'clsx';
import * as React from 'react';

import { Spinner } from '@/shared';

const variants = {
  primary: 'bg-pink-purple-1 text-white',
  inverse: 'dark:bg-navy-1 dark:text-pink-purple-1',
  danger: 'bg-red-600 text-white',
};

const sizes = {
  sm: 'py-2 px-4 text-sm',
  md: 'py-2 px-6 text-md',
  lg: 'py-2 px-[88px] text-lg',
  full: 'w-full py-2 px-[88px]',
};

type IconProps =
  | { startIcon: React.ReactElement; endIcon?: never }
  | { endIcon: React.ReactElement; startIcon?: never }
  | { endIcon?: undefined; startIcon?: undefined };

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  isLoading?: boolean;
} & IconProps;

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      type,
      className = '',
      variant = 'primary',
      size = 'md',
      isLoading = false,
      startIcon,
      endIcon,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        type={type}
        className={clsx(
          'flex justify-center items-center border border-purple-0 dark:border-pink-purple-1 cursor-pointer font-Jost text-purple-0 hover:text-white dark:hover:text-white disabled:text-stone-300 dark:disabled:text-stone-300 disabled:border-transparent dark:disabled:border-transparent dark:disabled:bg-slate-1 disabled:bg-slate-1 disabled:opacity-70 disabled:cursor-not-allowed rounded-md shadow-sm font-medium focus:outline-none hover:opacity-80 hover:bg-purple-0 dark:hover:bg-pink-purple-1',
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        {isLoading && <Spinner size="sm" className="text-current" />}
        {!isLoading && startIcon}
        <span className="mx-2">{props.children}</span> {!isLoading && endIcon}
      </button>
    );
  }
);

Button.displayName = 'Button';
