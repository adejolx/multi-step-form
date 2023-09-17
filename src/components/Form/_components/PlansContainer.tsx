import { FrontMatter, Plan, Switch } from 'components';
import { PlanType } from 'store/slices/types';
import { useStore } from 'store/useStore';

import { planPropsList, switchPlanPricing } from './data';

const PlansContainer = () => {
  const { onPlanChange, subscriptionPlan, setSubscriptionPlan, planOption } =
    useStore((state) => state);
  const planPricing = switchPlanPricing(subscriptionPlan);

  return (
    <>
      <FrontMatter
        title="Select your plan"
        description="You have the option of monthly or yearly billing"
      />
      <div className="space-y-8">
        <ul className="grid gap-4 md:grid-flow-col md:auto-cols-fr">
          {planPropsList.map(({ value, ...others }) => {
            return (
              <li key={value}>
                <Plan
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    onPlanChange(e.target.value as PlanType)
                  }
                  checked={value === planOption}
                  value={value}
                  price={planPricing[value]}
                  {...others}
                />
              </li>
            );
          })}
        </ul>
        <div className="flex justify-center gap-4 bg-blue-200/10 rounded-md p-4">
          <span
            className={`font-bold${
              subscriptionPlan === 'monthly' ? ' text-blue-400' : ''
            }`}
          >
            Monthly
          </span>
          <Switch
            onCheckedChange={setSubscriptionPlan}
            checked={subscriptionPlan === 'monthly' ? false : true}
          />
          <span
            className={`font-bold${
              subscriptionPlan === 'yearly' ? ' text-blue-400' : ''
            }`}
          >
            Yearly
          </span>
        </div>
      </div>
    </>
  );
};

export default PlansContainer;
