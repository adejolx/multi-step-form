import { forwardRef } from 'react';
import * as SwitchPrimitive from '@radix-ui/react-switch';
import { cn } from 'utils';

const ROOT_HOVER_CLASSES =
  '[&:not([data-disabled])]:hover:outline [&:not([data-disabled])]:hover:outline-2 [&:not([data-disabled])]:hover:outline-blue-100 [&:not([data-disabled])]:hover:outline-offset-1';

const ROOT_FOCUS_CLASSES =
  '[&:not([data-disabled])]:focus:outline [&:not([data-disabled])]:focus:outline-2 [&:not([data-disabled])]:focus:outline-blue-100 [&:not([data-disabled])]:focus:outline-offset-1';

const ROOT_DISABLED_CLASSES =
  'data-[disabled]:ui-bg-gray-50 [&[data-state=checked][data-disabled]]:ui-bg-gray-100';

const THUMB_DISABLED_CLASSES =
  '[&[data-state=checked][data-disabled]]:bg-gray-300 [&[data-state=checked][data-disabled]]:opacity-[0.4]';

const Switch = forwardRef<
  React.ElementRef<typeof SwitchPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitive.Root>
>(({ className, ...otherProps }, ref) => {
  return (
    <SwitchPrimitive.Root
      ref={ref}
      className={cn(
        'w-[--switch-width] h-[--switch-height] bg-blue-400 rounded-full relative data-[state=checked]:bg-blue-400 outline-none cursor-default',
        ROOT_FOCUS_CLASSES,
        ROOT_HOVER_CLASSES,
        ROOT_DISABLED_CLASSES,
        className,
      )}
      {...otherProps}
    >
      <SwitchPrimitive.Thumb
        className={cn(
          'block w-[--switch-thumb-size] h-[--switch-thumb-size] bg-white rounded-full translate-x-[--switch-thumb-offset-x] transition-transform duration-100 will-change-transform data-[state=checked]:translate-x-[--switch-thumb-translate-distance] ',
          THUMB_DISABLED_CLASSES,
        )}
      ></SwitchPrimitive.Thumb>
    </SwitchPrimitive.Root>
  );
});
export { Switch };
