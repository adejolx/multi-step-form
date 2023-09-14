import { AddOn, FrontMatter } from 'components';
import { useStore } from 'store/useStore';

import { addOnPropsList, switchAddOnSubscriptionPlan } from './data';

const AddOnsContainer = () => {
  const { addOnOptions, onAddOnChange, subscriptionPlan } = useStore(
    (state) => state,
  );
  const addOnPlan = switchAddOnSubscriptionPlan(subscriptionPlan);

  return (
    <>
      <FrontMatter
        title="Pick add-ons"
        description="Add-ons help enhance your gaming experience"
      />
      <ul className="space-y-4">
        {addOnPropsList.map((addOnProps, index) => {
          return (
            <li key={addOnProps.title}>
              <AddOn
                isChecked={addOnOptions.includes(addOnProps.value)}
                onCheckedChange={(checked) =>
                  onAddOnChange(addOnProps.value, checked as boolean)
                }
                price={addOnPlan[addOnProps.value]}
                {...addOnProps}
              />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default AddOnsContainer;
