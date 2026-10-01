import React from 'react';
import { Loader2 } from 'lucide-react';

export type ButtonVariant =
  | 'lime'
  | 'blue'
  | 'outline'
  | 'outline-dark'
  | 'ghost'
  | 'ghost-dark'
  | 'pill-filter'
  | 'pill-filter-inactive'
  | 'dark';

export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  isLoading?: boolean;
  fullWidth?: boolean;
  className?: string;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'lime',
      size = 'md',
      children,
      leftIcon,
      rightIcon,
      isLoading = false,
      fullWidth = false,
      className = '',
      disabled,
      ...props
    },
    ref
  ) => {
    // Base layout & interaction
    const baseStyles =
      'inline-flex items-center justify-center font-bold tracking-tight rounded-full transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#0C4AEB] active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none disabled:active:scale-100 select-none cursor-pointer';

    // Size variants
    const sizeStyles: Record<ButtonSize, string> = {
      xs: 'text-[11px] px-3 py-1.5 gap-1.5',
      sm: 'text-xs px-4 py-2 gap-1.5',
      md: 'text-sm px-6 py-2.5 gap-2',
      lg: 'text-base px-8 py-3.5 gap-2.5',
    };

    // Color & theme variants based on ByteSpace Figma tokens
    const variantStyles: Record<ButtonVariant, string> = {
      // Primary signature neon lime CTA
      lime: 'bg-[#D4FC02] text-slate-950 hover:bg-[#c6ec02] shadow-sm hover:shadow-md hover:shadow-[#D4FC02]/25',

      // Brand electric blue
      blue: 'bg-[#0C4AEB] text-white hover:bg-[#0a3ec6] shadow-sm hover:shadow-md hover:shadow-blue-600/20',

      // Semi-transparent frosted glass pill for dark/blue backgrounds
      outline:
        'border border-white/20 bg-white/10 hover:bg-white/20 text-white backdrop-blur-xs shadow-xs',

      // Clean border pill for light neutral backgrounds
      'outline-dark':
        'border border-slate-200 bg-white text-slate-800 hover:bg-slate-50 hover:border-slate-300 shadow-xs',

      // Ghost on dark blue
      ghost: 'text-white/85 hover:text-white hover:bg-white/10',

      // Ghost on white/light
      'ghost-dark': 'text-slate-600 hover:text-slate-900 hover:bg-slate-100',

      // Category filter pill (Active state in Course Discovery)
      'pill-filter':
        'bg-[#D4FC02] text-slate-950 shadow-sm hover:bg-[#c6ec02] font-semibold text-xs sm:text-sm',

      // Category filter pill (Inactive state in Course Discovery)
      'pill-filter-inactive':
        'bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs sm:text-sm',

      // Deep slate button
      dark: 'bg-slate-900 text-white hover:bg-slate-800 shadow-sm',
    };

    const widthStyle = fullWidth ? 'w-full' : '';

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${widthStyle} ${className}`}
        {...props}
      >
        {isLoading ? (
          <Loader2 className="w-4 h-4 animate-spin shrink-0" />
        ) : (
          leftIcon && <span className="shrink-0">{leftIcon}</span>
        )}

        <span>{children}</span>

        {!isLoading && rightIcon && <span className="shrink-0">{rightIcon}</span>}
      </button>
    );
  }
);

Button.displayName = 'Button';
