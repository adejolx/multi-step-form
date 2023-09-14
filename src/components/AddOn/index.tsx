import { forwardRef } from 'react';
import { AddOnType } from 'store/slices/types';
import { useStore } from 'store/useStore';
import { cn } from 'utils';

import { Checkbox } from '..';

export type AddOnProps = {
  title: string;
  description: string;
  name: string;
  value: AddOnType;
  price: number;
  isChecked: boolean;
  onCheckedChange: (arg: boolean) => void;
};

const AddOn = forwardRef<
  React.ElementRef<typeof Checkbox>,
  React.ComponentPropsWithoutRef<typeof Checkbox> & AddOnProps
>(
  (
    { title, description, name, value, price, isChecked, onCheckedChange },
    ref,
  ) => {
    const { subscriptionPlan } = useStore((state) => state);
    return (
      <label
        className={cn(
          `min-w-full flex items-center gap-6 border-2 border-gray-300/50 px-6 py-3 rounded-md normal-case`,
          isChecked && ' bg-blue-200/10 border-blue-300/50',
        )}
        htmlFor={value}
      >
        <span>
          <Checkbox
            id={value}
            name={name}
            value={value}
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
          +${price}/{subscriptionPlan === 'monthly' ? 'mo' : 'yr'}
        </span>
      </label>
    );
  },
);
export { AddOn };
