import { forwardRef, useId } from 'react'
import { cn } from '@/utils/cn'
import { InputProps } from './Input.types'

const inputSizes = {
  sm: 'h-8 px-3 text-sm',
  md: 'h-10 px-4 text-base',
  lg: 'h-12 px-5 text-lg',
}

const inputVariants = {
  default: 'border-secondary-300 focus:border-primary-500',
  error: 'border-red-500 focus:border-red-600',
  success: 'border-green-500 focus:border-green-600',
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      size = 'md',
      variant = 'default',
      label,
      helperText,
      error,
      leftIcon,
      rightIcon,
      fullWidth = false,
      className,
      disabled = false,
      id,
      ...props
    },
    ref
  ) => {
    const generatedId = useId()
    const inputId = id || generatedId
    const helperTextId = `${inputId}-helper`
    const errorId = `${inputId}-error`

    const actualVariant = error ? 'error' : variant
    const describedBy = error ? errorId : helperText ? helperTextId : undefined

    return (
      <div className={cn('flex flex-col gap-1.5', fullWidth && 'w-full')}>
        {label && (
          <label
            htmlFor={inputId}
            className="text-sm font-medium text-secondary-900 dark:text-secondary-100"
          >
            {label}
          </label>
        )}

        <div className="relative flex items-center">
          {leftIcon && (
            <div className="absolute left-3 flex items-center pointer-events-none text-secondary-500">
              {leftIcon}
            </div>
          )}

          <input
            ref={ref}
            id={inputId}
            disabled={disabled}
            aria-describedby={describedBy}
            aria-invalid={error ? 'true' : undefined}
            className={cn(
              'w-full rounded-md border bg-white',
              'text-secondary-900 placeholder:text-secondary-400',
              'transition-colors duration-200',
              'focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-1',
              'disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-secondary-50',
              inputSizes[size],
              inputVariants[actualVariant],
              leftIcon && 'pl-10',
              rightIcon && 'pr-10',
              className
            )}
            {...props}
          />

          {rightIcon && (
            <div className="absolute right-3 flex items-center pointer-events-none text-secondary-500">
              {rightIcon}
            </div>
          )}
        </div>

        {error && (
          <p id={errorId} className="text-sm text-red-600" role="alert">
            {error}
          </p>
        )}

        {helperText && !error && (
          <p id={helperTextId} className="text-sm text-secondary-600">
            {helperText}
          </p>
        )}
      </div>
    )
  }
)

Input.displayName = 'Input'
