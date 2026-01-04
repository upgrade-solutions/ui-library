import { forwardRef, createContext, useContext, useState } from 'react'
import { cn } from '@/utils/cn'
import { RadioProps, RadioGroupProps } from './Radio.types'

const radioSizes = {
  sm: 'h-4 w-4',
  md: 'h-5 w-5',
  lg: 'h-6 w-6',
}

const labelSizes = {
  sm: 'text-sm',
  md: 'text-base',
  lg: 'text-lg',
}

interface RadioContextValue {
  name: string
  value?: string
  onChange?: (value: string) => void
}

const RadioContext = createContext<RadioContextValue | null>(null)

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
  (
    {
      size = 'md',
      label,
      error,
      className,
      disabled = false,
      id,
      value,
      ...props
    },
    ref
  ) => {
    const context = useContext(RadioContext)
    const generatedId = id || `radio-${Math.random().toString(36).substr(2, 9)}`

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      props.onChange?.(e)
      if (context?.onChange && value) {
        context.onChange(value.toString())
      }
    }

    const isControlled = context?.value !== undefined || props.checked !== undefined
    const isChecked = context?.value !== undefined 
      ? context.value === value?.toString()
      : props.checked

    return (
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2">
          <input
            ref={ref}
            type="radio"
            id={generatedId}
            name={context?.name || props.name}
            value={value}
            {...(isControlled ? { checked: isChecked } : { defaultChecked: isChecked })}
            disabled={disabled}
            className={cn(
              'rounded-full border-2 border-gray-300',
              'text-primary-600',
              'focus:ring-2 focus:ring-primary-500 focus:ring-offset-2',
              'transition-colors duration-200',
              'cursor-pointer',
              'disabled:cursor-not-allowed disabled:opacity-50',
              error && 'border-red-500 focus:ring-red-500',
              radioSizes[size],
              className
            )}
            onChange={handleChange}
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

Radio.displayName = 'Radio'

export const RadioGroup = ({
  name,
  value: controlledValue,
  defaultValue,
  onChange,
  children,
  error,
  className,
}: RadioGroupProps) => {
  const [internalValue, setInternalValue] = useState(defaultValue || '')
  
  const isControlled = controlledValue !== undefined
  const currentValue = isControlled ? controlledValue : internalValue

  const handleChange = (newValue: string) => {
    if (!isControlled) {
      setInternalValue(newValue)
    }
    onChange?.(newValue)
  }

  return (
    <RadioContext.Provider value={{ name, value: currentValue, onChange: handleChange }}>
      <div className={cn('flex flex-col gap-2', className)}>
        {children}
        {error && <span className="text-sm text-red-600">{error}</span>}
      </div>
    </RadioContext.Provider>
  )
}

RadioGroup.displayName = 'RadioGroup'
