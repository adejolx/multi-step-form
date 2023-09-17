import { useStore } from 'store/useStore';
import { checkInputValidity, cn } from 'utils';

import { Step } from '../Step';

const stepsArray: Array<{ step: number; title: string }> = [
  {
    step: 1,
    title: 'your info',
  },
  {
    step: 2,
    title: 'select plan',
  },
  {
    step: 3,
    title: 'add-ons',
  },
  {
    step: 4,
    title: 'summary',
  },
];

interface AsideProps {
  className: string;
}
const Aside = ({ className }: AsideProps) => {
  const { currentStep, setCurrentStep, userInfo, errors } = useStore(
    (state) => state,
  );
  const inputIsValid = checkInputValidity(userInfo, errors);

  return (
    <ul
      className={cn(
        'flex justify-center gap-4 bg-blue-300 bg-sidebarMobile bg-origin-border bg-center bg-no-repeat bg-cover md:block md:space-y-8 md:bg-sidebarDesktop px-8 pt-8 pb-12',
        className,
      )}
    >
      {stepsArray.map(({ step, title }, index) => {
        return (
          <li key={title}>
            <Step
              step={step}
              title={title}
              onStepChange={() => {
                if (inputIsValid) setCurrentStep(index);
              }}
              className={
                currentStep === index ? 'bg-blue-100 text-blue-400' : ''
              }
            />
          </li>
        );
      })}
    </ul>
  );
};

export { Aside };
