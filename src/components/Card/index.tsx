import { cn } from 'utils';

type CardProps = {
  imgUrl: string;
  value: string;
  title: string;
  description: string;
  name: string;
  checked: boolean;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
} & React.HTMLAttributes<HTMLInputElement>;

const Card = ({
  imgUrl,
  value,
  title,
  description,
  name,
  checked,
  onChange,
  ...props
}: CardProps) => {
  return (
    <label
      className={cn(
        'block border-2 border-gray-300/50 px-6 py-4 rounded-md',
        checked && 'bg-gray-200/50 border-blue-300/50',
      )}
      htmlFor={value}
    >
      <img src={imgUrl} alt="" aria-hidden />
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
      <span className="flex flex-col items-start">
        <span className="text-blue-400 font-bold">{title}</span>
        <span className="text-gray-400">{description}</span>
      </span>
    </label>
  );
};

export { Card };
