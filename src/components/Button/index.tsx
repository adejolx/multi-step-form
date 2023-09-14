import { cn } from 'utils';

type ButtonProps = {
  children: React.ReactNode;
  variant?: 'ghost' | 'normal' | 'terminal';
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
} & React.HTMLAttributes<HTMLButtonElement>;

const Button = ({
  children,
  variant = 'normal',
  onClick,
  className,
  ...props
}: ButtonProps) => {
  const DEFAULT_BUTTON_CLASSES = cn(
    'px-6 py-3 rounded-md transition-colors focus:outline focus:outline-offset-2 focus:outline-1 text-white font-medium capitalize',
    variant === 'normal' &&
      'bg-blue-400 hover:bg-opacity-80 focus:outline-blue-400',
    variant === 'terminal' &&
      'bg-blue-300 hover:bg-opacity-70 focus:outline-blue-300',
    variant === 'ghost' &&
      'bg-transparent hover:outline hover:outline-1 hover:outline-offset-2 text-gray-400',
  );
  return (
    <button
      className={cn(DEFAULT_BUTTON_CLASSES, className)}
      type="button"
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export { Button };
