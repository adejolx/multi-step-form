import { forwardRef } from 'react';
import { cn } from 'utils';

import { Checkbox } from '..';

type OptionProps = {
  title: string;
  description: string;
  name: string;
  price: string;
  duration: 'monthly' | 'yearly';
  isChecked: boolean;
  onCheckedChange: (arg: boolean) => void;
};

const Option = forwardRef<
  React.ElementRef<typeof Checkbox>,
  React.ComponentPropsWithoutRef<typeof Checkbox> & OptionProps
>(
  (
    { title, description, name, price, duration, isChecked, onCheckedChange },
    ref,
  ) => {
    return (
      <label
        className={cn(
          `min-w-full flex items-center gap-6 border-2 border-gray-300/50 px-6 py-3 rounded-md normal-case`,
          isChecked && ' bg-gray-200/50 border-blue-300/50',
        )}
        htmlFor={name}
      >
        <span>
          <Checkbox
            id={name}
            name={name}
            ref={ref}
            aria-hidden
            className="pointer-events-none"
            checked={isChecked}
            onCheckedChange={onCheckedChange}
          />
        </span>
        <span className="flex flex-col items-start">
          <span className="text-blue-400 font-bold">{title}</span>
          <span className="text-gray-400">{description}</span>
        </span>
        <span className="text-blue-300/70 ml-auto">
          +${price}/{duration === 'monthly' ? 'mo' : 'yr'}
        </span>
      </label>
    );
  },
);
export { Option };
