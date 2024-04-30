import { InputHTMLAttributes } from 'react';

export interface IField extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  icon?: any;
  error?: string;
}
