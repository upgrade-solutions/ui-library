import { ReactNode } from 'react';

export type TextVariant =
  | 'body1'
  | 'body2'
  | 'caption'
  | 'overline'
  | 'subtitle1'
  | 'subtitle2';

export type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export type TextAlign = 'left' | 'center' | 'right' | 'justify';

export type FontWeight =
  | 'light'
  | 'normal'
  | 'medium'
  | 'semibold'
  | 'bold'
  | 'extrabold';

export type TextColor =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'error'
  | 'warning'
  | 'muted';

export interface BaseTypographyProps {
  children: ReactNode;
  className?: string;
  align?: TextAlign;
  color?: TextColor;
  weight?: FontWeight;
  italic?: boolean;
  underline?: boolean;
  truncate?: boolean;
  as?: React.ElementType;
}

export interface TextProps extends BaseTypographyProps {
  variant?: TextVariant;
}

export interface HeadingProps extends BaseTypographyProps {
  level?: HeadingLevel;
}
