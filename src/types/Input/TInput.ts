import { InputHTMLAttributes, ReactNode } from 'react';

export type TInput = {
  children: ReactNode;
} & InputHTMLAttributes<HTMLInputElement>;
