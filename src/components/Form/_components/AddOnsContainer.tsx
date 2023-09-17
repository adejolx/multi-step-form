import { AddOn, FrontMatter } from 'components';
import { useStore } from 'store/useStore';

import { addOnPropsList, switchAddOnPricing } from './data';

const AddOnsContainer = () => {
  const { addOnOptions, onAddOnChange, subscriptionPlan } = useStore(
    (state) => state,
  );
  const addOnPricing = switchAddOnPricing(subscriptionPlan);

  return (
    <>
      <FrontMatter
        title="Pick add-ons"
        description="Add-ons help enhance your gaming experience"
      />
      <ul className="space-y-4">
        {addOnPropsList.map(({ title, value, ...others }) => {
          return (
            <li key={title}>
              <AddOn
                isChecked={addOnOptions.includes(value)}
                onCheckedChange={(checked) =>
                  onAddOnChange(value, checked as boolean)
                }
                title={title}
                value={value}
                price={addOnPricing[value]}
                {...others}
              />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default AddOnsContainer;
