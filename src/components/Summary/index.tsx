import { useStore } from 'store/useStore';
import { underscoresToSentenceCase } from 'utils';

import {
  switchAddOnPricing,
  switchPlanPricing,
} from '../Form/_components/data';
import { FrontMatter } from '../FrontMatter';

const Summary = () => {
  const { subscriptionPlan, planOption, addOnOptions, setCurrentStep } =
    useStore((state) => state);
  const planPricing = switchPlanPricing(subscriptionPlan);
  const addOnPricing = switchAddOnPricing(subscriptionPlan);
  const subscriptionPlanAcronym = subscriptionPlan === 'monthly' ? 'mo' : 'yr';
  const totalPricing =
    addOnOptions.reduce((prev, curr) => prev + addOnPricing[curr], 0) +
    planPricing[planOption];

  return (
    <>
      <FrontMatter
        title="Finishing up"
        description="Double-check everything looks OK before confirming"
      />
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <span className="flex flex-col gap-1">
            <span className="capitalize text-blue-400 text-lg font-medium">
              {`${planOption} (${subscriptionPlan})`}
            </span>
            <a
              className="underline cursor-pointer text-sm"
              onClick={(e) => {
                e.preventDefault();
                setCurrentStep(1);
              }}
            >
              Change
            </a>
          </span>
          <span className="text-blue-400 text-lg font-bold">
            ${planPricing[planOption]}/{subscriptionPlanAcronym}
          </span>
        </div>
        <div className="space-y-4">
          {addOnOptions.map((addOnOption) => {
            return (
              <div key={addOnOption} className="flex justify-between text-sm">
                <span>{underscoresToSentenceCase(addOnOption)}</span>
                <span className="text-blue-400">
                  +${addOnPricing[addOnOption]}/{subscriptionPlanAcronym}
                </span>
              </div>
            );
          })}
        </div>
        <div className="flex justify-between text-sm">
          <span>
            Total (per {subscriptionPlan === 'monthly' ? 'month' : 'year'})
          </span>
          <span className="text-lg text-blue-300 font-semibold">
            +${totalPricing}/{subscriptionPlanAcronym}
          </span>
        </div>
      </div>
    </>
  );
};

export { Summary };
