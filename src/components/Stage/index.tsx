interface StageProps {
  step: number;
  title: string;
  onStepChange: () => void;
}
const Stage: React.FC<StageProps> = ({ step, title, onStepChange }) => {
  return (
    <div className="flex items-center gap-4 text-gray-200">
      <button
        className="w-10 h-10 rounded-full border-[1.5px] border-gray-200 font-bold hover:bg-blue-100 hover:text-blue-400 transition-colors"
        onClick={onStepChange}
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
export { Stage };
