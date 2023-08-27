import { forwardRef, useState } from 'react';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { Check } from 'lucide-react';
import { cn } from 'utils';

type CheckboxProps = {
  checked?: boolean | 'indeterminate';
  required?: boolean;
  onCheckedChange?: (checked: boolean | 'indeterminate') => void;
  className?: string;
};

const Checkbox = forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> & CheckboxProps
>(
  (
    { checked, required = false, onCheckedChange, className, ...props },
    ref,
  ) => {
    const [isTouched, setIsTouched] = useState(false);
    const [defaultChecked, setdefaultChecked] = useState(false);
    const ICON_SIZE = 16;
    const ICON_STROKE_WIDTH = 3;
    const DEFAULT_CHECKBOX_CLASSES =
      'bg-white w-[--checkbox-size] h-[--checkbox-size] border-gray-300/70 border-[length:--checkbox-border-width] rounded-[--checkbox-border-radius] flex items-center justify-center [&[data-state=checked]:not([data-disabled])]:border-blue-300 [&[data-state=indeterminate]:not([data-disabled])]:border-blue-300 [&:not([data-disabled])]:hover:outline outline-2 outline-blue-100 outline-offset-1 [&:not([data-disabled])]:focus:outline outline-2 outline-blue-100 outline-offset-1';
    const DEFAULT_CHECKBOX_INDICATOR_CLASSES =
      'text-white [&[data-state=checked]:not([data-disabled])]:bg-blue-300 [&[data-state=checked]:not([data-disabled])]:w-full [&[data-state=checked]:not([data-disabled])]:h-full [&[data-state=indeterminate]:not([data-disabled])]:bg-blue-300 [&[data-state=indeterminate]:not([data-disabled])]:w-full [&[data-state=indeterminate]:not([data-disabled])]:h-full [&[data-state=checked][data-disabled]]:bg-gray-100 [&[data-state=indeterminate][data-disabled]]:bg-gray-100';
    const ERROR_CLASSES =
      required && (!checked || !defaultChecked) && isTouched ? 'required' : '';

    const defaultChangeHandler = () => {
      setdefaultChecked((prev) => !prev);
    };

    return (
      <CheckboxPrimitive.Root
        checked={checked}
        onCheckedChange={onCheckedChange || defaultChangeHandler}
        className={cn(DEFAULT_CHECKBOX_CLASSES, ERROR_CLASSES, className)}
        value={checked || defaultChecked ? 'on' : 'off'}
        onBlur={() => setIsTouched(true)}
        ref={ref}
        {...props}
      >
        <CheckboxPrimitive.Indicator
          className={DEFAULT_CHECKBOX_INDICATOR_CLASSES}
        >
          {(checked || defaultChecked) && (
            <Check size={ICON_SIZE} strokeWidth={ICON_STROKE_WIDTH} />
          )}
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>
    );
  },
);

export { Checkbox };
