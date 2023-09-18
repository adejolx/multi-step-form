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
  const {
    currentStep,
    setCurrentStep,
    subscriptionIsConfirmed,
    userInfo,
    errors,
  } = useStore((state) => state);
  const inputIsValid = checkInputValidity(userInfo, errors);

  return (
    <aside
      className={cn(
        'bg-blue-300 bg-sidebarMobile bg-origin-border bg-center bg-no-repeat bg-cover md:bg-sidebarDesktop px-8 pt-8 pb-8',
        className,
        'aside',
      )}
    >
      <ul
        className={cn(
          'flex justify-center gap-4 md:block md:space-y-8 sm:mb-8 md:mb-0',
          'aside__step-list',
        )}
      >
        {stepsArray.map(({ step, title }, index) => {
          return (
            <li key={title}>
              <Step
                step={step}
                title={title}
                onStepChange={() => {
                  if (inputIsValid && !subscriptionIsConfirmed)
                    setCurrentStep(index);
                }}
                className={
                  currentStep === index ? 'bg-blue-100 text-blue-400' : ''
                }
              />
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export { Aside };
