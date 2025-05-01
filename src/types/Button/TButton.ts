import { ButtonHTMLAttributes, ReactNode } from 'react';

export type TButton = {
  buttonColor?: 'primary' | 'success' | 'warning' | 'error' | 'info';
  size?: 'small' | 'medium' | 'large' | 'extraLarge';
  icon?: ReactNode;
  textButton?: string;
  buttonFunction?: () => void;
  link?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;
