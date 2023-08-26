import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

const cn = (...classNames: Array<ClassValue>) => {
  return twMerge(clsx(classNames));
};

export { cn };
