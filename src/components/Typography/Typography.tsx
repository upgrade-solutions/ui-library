import React from 'react';
import { cn } from '../../utils/cn';
import {
  TextProps,
  HeadingProps,
  TextAlign,
  FontWeight,
  TextColor,
  HeadingLevel,
  TextVariant,
} from './Typography.types';

const getAlignClass = (align?: TextAlign): string => {
  if (!align) return '';
  const alignMap: Record<TextAlign, string> = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
    justify: 'text-justify',
  };
  return alignMap[align];
};

const getColorClass = (color?: TextColor): string => {
  if (!color) return '';
  const colorMap: Record<TextColor, string> = {
    primary: 'text-blue-600',
    secondary: 'text-gray-600',
    success: 'text-green-600',
    error: 'text-red-600',
    warning: 'text-yellow-600',
    muted: 'text-gray-500',
  };
  return colorMap[color];
};

const getWeightClass = (weight?: FontWeight): string => {
  if (!weight) return '';
  const weightMap: Record<FontWeight, string> = {
    light: 'font-light',
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold',
    extrabold: 'font-extrabold',
  };
  return weightMap[weight];
};

const getTextVariantClasses = (variant: TextVariant): string => {
  const variantMap: Record<TextVariant, string> = {
    body1: 'text-base',
    body2: 'text-sm',
    caption: 'text-xs',
    overline: 'text-xs uppercase tracking-wide',
    subtitle1: 'text-lg font-medium',
    subtitle2: 'text-base font-medium',
  };
  return variantMap[variant];
};

const getHeadingClasses = (level: HeadingLevel): string => {
  const levelMap: Record<HeadingLevel, string> = {
    h1: 'text-4xl font-bold',
    h2: 'text-3xl font-bold',
    h3: 'text-2xl font-semibold',
    h4: 'text-xl font-semibold',
    h5: 'text-lg font-medium',
    h6: 'text-base font-medium',
  };
  return levelMap[level];
};

export const Text = React.forwardRef<HTMLElement, TextProps>(
  (
    {
      children,
      variant = 'body1',
      className,
      align,
      color,
      weight,
      italic = false,
      underline = false,
      truncate = false,
      as,
      ...props
    },
    ref
  ) => {
    const Component = as || 'p';

    const classes = cn(
      getTextVariantClasses(variant),
      getAlignClass(align),
      getColorClass(color),
      getWeightClass(weight),
      {
        italic: italic,
        underline: underline,
        truncate: truncate,
      },
      className
    );

    return (
      <Component ref={ref} className={classes} {...props}>
        {children}
      </Component>
    );
  }
);

Text.displayName = 'Text';

export const Heading = React.forwardRef<HTMLElement, HeadingProps>(
  (
    {
      children,
      level = 'h2',
      className,
      align,
      color,
      weight,
      italic = false,
      underline = false,
      truncate = false,
      as,
      ...props
    },
    ref
  ) => {
    const Component = as || level;

    const classes = cn(
      getHeadingClasses(level),
      getAlignClass(align),
      getColorClass(color),
      getWeightClass(weight),
      {
        italic: italic,
        underline: underline,
        truncate: truncate,
      },
      className
    );

    return (
      <Component ref={ref} className={classes} {...props}>
        {children}
      </Component>
    );
  }
);

Heading.displayName = 'Heading';
