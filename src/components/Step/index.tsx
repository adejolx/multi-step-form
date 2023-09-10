import { cn } from 'utils';

interface StepProps {
  step: number;
  title: string;
  onStepChange: () => void;
  className?: string;
}
const Step: React.FC<StepProps> = ({
  step,
  title,
  onStepChange,
  className,
}) => {
  return (
    <div className="flex items-center gap-4 text-gray-200">
      <button
        className={cn(
          'w-10 h-10 rounded-full border-[1.5px] border-gray-200 font-bold hover:bg-blue-100 hover:text-blue-400 transition-colors',
          className,
        )}
        onClick={onStepChange}
        aria-label={`Go to step ${step}`}
      >
        {step}
      </button>
      <p className="sr-only md:not-sr-only flex flex-col gap-0">
        <span className="text-sm">Step {step}</span>
        <span className="font-bold uppercase">{title}</span>
      </p>
    </div>
  );
};
export { Step };
