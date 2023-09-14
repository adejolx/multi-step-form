import { HTMLInputTypeAttribute } from 'react';
import { cn } from 'utils';

const createDefaultPlaceholder = (inputType: HTMLInputTypeAttribute) => {
  switch (inputType) {
    case 'email':
      return 'e.g. stephenking@lorem.com';
    case 'tel':
      return 'e.g. +1 234 567 890';
    case 'text':
    default:
      return 'e.g. Stephen King';
  }
};

interface InputProps extends React.HTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  id?: string;
  className?: string;
  type?: HTMLInputTypeAttribute;
  required?: boolean;
  error?: string;
}

const Input: React.FC<InputProps> = ({
  label,
  name,
  id,
  className,
  type = 'text',
  error,
  required = false,
  ...otherProps
}) => {
  const defaultPlaceholder = createDefaultPlaceholder(type);
  const ERROR_CLASSES =
    required && error ? 'border-red-100 focus:border-red-100' : '';

  return (
    <div className="space-y-1">
      <label htmlFor={name} className="block text-start text-sm text-blue-400">
        {label}
      </label>
      <div className="relative">
        <input
          id={id || name}
          name={name}
          type="text"
          placeholder={defaultPlaceholder}
          required={required}
          aria-required={required}
          aria-invalid={error ? true : false}
          aria-describedby="invalid-input"
          className={cn(
            'block px-4 py-2 border-gray-300 border-[1.5px] focus:outline focus:outline-transparent focus:border-[1.5px] focus:border-blue-300 rounded-md placeholder:text-gray-400 font-medium text-blue-400',
            ERROR_CLASSES,
            className,
          )}
          {...otherProps}
        />
        <span
          id="invalid-input"
          className={cn(
            'text-red-100 text-sm font-bold absolute right-0 bottom-[calc(100%+0.25rem)]',
            !(error && required) && 'sr-only',
          )}
          aria-live="polite"
        >
          {error}
        </span>
      </div>
    </div>
  );
};

export { Input };
