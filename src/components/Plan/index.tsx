import { PlanType } from 'store/slices/types';
import { useStore } from 'store/useStore';
import { cn } from 'utils';

export interface PlanProps extends React.HTMLAttributes<HTMLInputElement> {
  imgUrl: string;
  value: PlanType;
  title: string;
  price: number;
  name: string;
  checked: boolean;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

const Plan = ({
  imgUrl,
  value,
  title,
  price,
  name,
  checked,
  onChange,
  ...props
}: PlanProps) => {
  const { subscriptionPlan } = useStore((state) => state);

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
          'border-2 border-gray-300/50 px-6 py-4 rounded-md flex gap-4 md:flex-col md:gap-8 [:focus_+_&]:outline-dashed [:focus_+_&]:outline-offset-2 [:focus_+_&]:outline-1 [:focus_+_&]:outline-blue-200 [:hover_+_&]:bg-blue-200/20',
          checked && 'bg-blue-200/10 border-blue-300/50',
        )}
        htmlFor={value}
      >
        <div className="flex items-center">
          <img src={imgUrl} alt="" aria-hidden />
        </div>

        <span className="flex flex-col items-start">
          <span className="text-blue-400 font-bold">{title}</span>
          <span className="text-gray-400">
            ${price}
            {subscriptionPlan === 'monthly' ? '/mo' : '/yr'}
          </span>
          {subscriptionPlan === 'yearly' && (
            <span className="text-sm text-blue-400">2 months free</span>
          )}
        </span>
      </label>
    </>
  );
};

export { Plan };
