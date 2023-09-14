import { useStore } from 'store/useStore';
import { useForm } from 'utils';

import AddOnsContainer from './_components/AddOnsContainer';
import InfoFieldsContainer from './_components/InfoFieldsContainer';
import PlansContainer from './_components/PlansContainer';

type FormProps = {
  className?: string;
};

const initialState = {
  name: '',
  email: '',
  tel: '',
};

const validationFn = (state: typeof initialState) => {
  const errors: Partial<typeof initialState> = {};
  const emailRegex =
    /^[\w-]+(\.[\w-]+)*@[a-zA-Z\d-]+(\.[a-zA-Z\d-]+)*\.[a-zA-Z]{1,}$/;
  const telephoneRegex = /^\+\d{9,13}$/;

  if (!state.name) errors.name = 'This field is required';

  if (!state.email) errors.email = 'This field is required';
  if (state.email && !emailRegex.test(state.email))
    errors.email = 'invalid email';

  if (!state.tel) errors.tel = 'This field is required';
  if (state.tel && !telephoneRegex.test(state.tel))
    errors.tel = 'invalid phone number';

  return errors;
};

const Form = ({ className }: FormProps) => {
  const currentStep = useStore((state) => state.currentStep);
  const { handleChange, handleBlur, formState } = useForm(
    initialState,
    validationFn,
  );

  return (
    <>
      <form action="" className={className}>
        {switchFormsByStage(
          { handleChange, handleBlur, formState },
          currentStep,
        )}
      </form>
    </>
  );
};

const switchFormsByStage = (
  formUtils: ReturnType<typeof useForm<typeof initialState>>,
  step: number,
) => {
  switch (step) {
    case 0:
      return <InfoFieldsContainer {...formUtils} />;
    case 1:
      return <PlansContainer />;
    case 2:
      return <AddOnsContainer />;
    default:
      return;
  }
};

export { Form };
