import { useStore } from 'store/useStore';

import { Completed } from './_components/Completed';
import SubscriptionSummary from './_components/SubscriptionSummary';

const Summary = () => {
  const { subscriptionIsConfirmed } = useStore((state) => state);
  return (
    <>{subscriptionIsConfirmed ? <Completed /> : <SubscriptionSummary />}</>
  );
};

export { Summary };
