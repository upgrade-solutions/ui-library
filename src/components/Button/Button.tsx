import { forwardRef } from 'react'
import { cn } from '@/utils/cn'
import { ButtonProps } from './Button.types'

const buttonVariants = {
  primary: 'bg-primary-600 text-white hover:bg-primary-700 active:bg-primary-800',
  secondary: 'bg-secondary-600 text-white hover:bg-secondary-700 active:bg-secondary-800',
  outline:
    'border-2 border-primary-600 text-primary-600 bg-transparent hover:bg-primary-50 active:bg-primary-100',
  ghost: 'bg-transparent text-primary-600 hover:bg-primary-50 active:bg-primary-100',
  danger: 'bg-red-600 text-white hover:bg-red-700 active:bg-red-800',
}

const buttonSizes = {
  sm: 'h-8 px-3 text-sm',
  md: 'h-10 px-4 text-base',
  lg: 'h-12 px-6 text-lg',
}

const LoadingSpinner = () => (
  <svg
    className="animate-spin h-4 w-4"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
  >
    <circle
      className="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="4"
    ></circle>
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    ></path>
  </svg>
)

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      children,
      className,
      disabled = false,
      loading = false,
      fullWidth = false,
      leftIcon,
      rightIcon,
      type = 'button',
      ...props
    },
    ref
  ) => {
    const isDisabled = disabled || loading

    return (
      <button
        ref={ref}
        type={type}
        disabled={isDisabled}
        className={cn(
          'inline-flex items-center justify-center gap-2',
          'font-medium rounded-md',
          'transition-colors duration-200',
          'focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2',
          'disabled:cursor-not-allowed disabled:opacity-50',
          buttonVariants[variant],
          buttonSizes[size],
          fullWidth && 'w-full',
          className
        )}
        {...props}
      >
        {loading && <LoadingSpinner />}
        {!loading && leftIcon && <span className="flex-shrink-0">{leftIcon}</span>}
        <span>{children}</span>
        {!loading && rightIcon && <span className="flex-shrink-0">{rightIcon}</span>}
      </button>
    )
  }
)

Button.displayName = 'Button'
