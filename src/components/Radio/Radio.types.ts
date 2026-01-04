import { InputHTMLAttributes } from 'react'

export type RadioSize = 'sm' | 'md' | 'lg'

export interface RadioProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'type'> {
  size?: RadioSize
  label?: string
  error?: string
}

export interface RadioGroupProps {
  name: string
  value?: string
  defaultValue?: string
  onChange?: (value: string) => void
  children: React.ReactNode
  error?: string
  className?: string
}
