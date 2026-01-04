import { InputHTMLAttributes } from 'react'

export type CheckboxSize = 'sm' | 'md' | 'lg'

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'type'> {
  size?: CheckboxSize
  label?: string
  error?: string
  indeterminate?: boolean
}
