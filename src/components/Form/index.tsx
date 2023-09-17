import { useStore } from 'store/useStore';

import AddOnsContainer from './_components/AddOnsContainer';
import InfoFieldsContainer from './_components/InfoFieldsContainer';
import PlansContainer from './_components/PlansContainer';

type FormProps = {
  className?: string;
};

const Form = ({ className }: FormProps) => {
  const { currentStep } = useStore((state) => state);

  return (
    <>
      <form action="" className={className}>
        {switchFormsByStep(currentStep)}
      </form>
    </>
  );
};

const switchFormsByStep = (step: number) => {
  switch (step) {
    case 0:
      return <InfoFieldsContainer />;
    case 1:
      return <PlansContainer />;
    case 2:
      return <AddOnsContainer />;
    default:
      return;
  }
};

export { Form };
