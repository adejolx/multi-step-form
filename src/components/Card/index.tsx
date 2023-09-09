import { cn } from 'utils';

interface CardProps extends React.HTMLAttributes<HTMLInputElement> {
  imgUrl: string;
  value: string;
  title: string;
  description: string;
  duration: 'monthly' | 'yearly';
  name: string;
  checked: boolean;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

const Card = ({
  imgUrl,
  value,
  title,
  description,
  duration = 'monthly',
  name,
  checked,
  onChange,
  ...props
}: CardProps) => {
  return (
    <>
      <input
        type="radio"
        id={value}
        name={name}
        value={value}
        className="sr-only"
        checked={checked}
        onChange={onChange}
        {...props}
      />
      <label
        className={cn(
          'border-2 border-gray-300/50 px-6 py-4 rounded-md flex gap-4 md:flex-col md:gap-8 [:focus_+_&]:outline [:focus_+_&]:outline-2 [:focus_+_&]:outline-blue-100 [:hover_+_&]:outline [:hover_+_&]:outline-2 [:hover_+_&]:outline-blue-100',
          checked && 'bg-blue-200/10 border-blue-300/50',
        )}
        htmlFor={value}
      >
        <div className="flex items-center justify-center">
          <img src={imgUrl} alt="" aria-hidden />
        </div>

        <span className="flex flex-col items-start">
          <span className="text-blue-400 font-bold">{title}</span>
          <span className="text-gray-400">{description}</span>
          {duration === 'yearly' && (
            <span className="text-sm text-blue-400">2 months free</span>
          )}
        </span>
      </label>
    </>
  );
};

export { Card };
