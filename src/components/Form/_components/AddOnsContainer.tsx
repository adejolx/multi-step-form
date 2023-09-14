import { AddOn, AddOnProps, FrontMatter } from 'components';
import { useStore } from 'store/useStore';

const switchAddOnSubscriptionPlan = (
  subscriptionPlan: 'monthly' | 'yearly',
) => {
  switch (subscriptionPlan) {
    case 'yearly':
      return {
        onlineService: 10,
        largerStorage: 20,
        customizableProfile: 20,
      };
    case 'monthly':
    default:
      return {
        onlineService: 1,
        largerStorage: 2,
        customizableProfile: 2,
      };
  }
};

const addOnPropsList: Array<
  Omit<AddOnProps, 'price' | 'isChecked' | 'onCheckedChange'>
> = [
  {
    title: 'Online service',
    description: 'Access to multiplayer games',
    name: 'addOn',
    value: 'onlineService',
  },
  {
    title: 'Larger Storage',
    description: 'Extra 1TB of cloud save',
    name: 'addOn',
    value: 'largerStorage',
  },
  {
    title: 'Customizable Profile',
    description: 'Custom theme on your profile',
    name: 'addOn',
    value: 'customizableProfile',
  },
];

const AddOnsContainer = () => {
  const { addOnOptions, onAddOnChange, subscriptionPlan } = useStore(
    (state) => state,
  );
  const addOnPlan = switchAddOnSubscriptionPlan(subscriptionPlan);
  console.log(addOnOptions);
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
