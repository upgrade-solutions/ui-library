import { forwardRef, useEffect, useRef } from 'react'
import { cn } from '@/utils/cn'
import { CheckboxProps } from './Checkbox.types'

const checkboxSizes = {
  sm: 'h-4 w-4',
  md: 'h-5 w-5',
  lg: 'h-6 w-6',
}

const labelSizes = {
  sm: 'text-sm',
  md: 'text-base',
  lg: 'text-lg',
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      size = 'md',
      label,
      error,
      indeterminate = false,
      className,
      disabled = false,
      id,
      ...props
    },
    ref
  ) => {
    const internalRef = useRef<HTMLInputElement>(null)
    const checkboxRef = (ref as any) || internalRef

    useEffect(() => {
      if (checkboxRef.current) {
        checkboxRef.current.indeterminate = indeterminate
      }
    }, [indeterminate, checkboxRef])

    const generatedId = id || `checkbox-${Math.random().toString(36).substr(2, 9)}`

    return (
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2">
          <input
            ref={checkboxRef}
            type="checkbox"
            id={generatedId}
            disabled={disabled}
            className={cn(
              'rounded border-2 border-gray-300',
              'text-primary-600',
              'focus:ring-2 focus:ring-primary-500 focus:ring-offset-2',
              'transition-colors duration-200',
              'cursor-pointer',
              'disabled:cursor-not-allowed disabled:opacity-50',
              error && 'border-red-500 focus:ring-red-500',
              checkboxSizes[size],
              className
            )}
            {...props}
          />
          {label && (
            <label
              htmlFor={generatedId}
              className={cn(
                'select-none cursor-pointer',
                'text-gray-700',
                disabled && 'cursor-not-allowed opacity-50',
                error && 'text-red-700',
                labelSizes[size]
              )}
            >
              {label}
            </label>
          )}
        </div>
        {error && <span className="text-sm text-red-600">{error}</span>}
      </div>
    )
  }
)

Checkbox.displayName = 'Checkbox'
