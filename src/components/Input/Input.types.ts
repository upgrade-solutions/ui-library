import { InputHTMLAttributes, ReactNode } from 'react'

export type InputSize = 'sm' | 'md' | 'lg'
export type InputVariant = 'default' | 'error' | 'success'

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  size?: InputSize
  variant?: InputVariant
  label?: string
  helperText?: string
  error?: string
  leftIcon?: ReactNode
  rightIcon?: ReactNode
  fullWidth?: boolean
}
