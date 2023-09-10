import { useForm } from 'utils';

import AddOn from './_components/AddOn';
import Info from './_components/Info';
import Plan from './_components/Plan';

type FormProps = {
  className?: string;
};

const stage: number = 0;

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
  const { handleChange, handleBlur, formState } = useForm(
    initialState,
    validationFn,
  );

  return (
    <>
      <form action="" className={className}>
        {switchFormsByStage({ handleChange, handleBlur, formState })}
      </form>
    </>
  );
};

const switchFormsByStage = (
  formUtils: ReturnType<typeof useForm<typeof initialState>>,
) => {
  switch (stage) {
    case 1:
    default:
      return <Info {...formUtils} />;
    case 2:
      return <Plan />;
    case 3:
      return <AddOn />;
  }
};

export { Form };
