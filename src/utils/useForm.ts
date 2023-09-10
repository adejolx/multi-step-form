import { useEffect, useState } from 'react';

import { trimWhitespace } from './text-formatting';

const useForm = <T extends object>(
  initialState: T,
  validationFn: (state: T) => Partial<Record<keyof T, string>>,
) => {
  const [formState, setFormState] = useState<{
    value: T;
    touched: Partial<Record<keyof T, boolean>>;
    errors: Partial<Record<keyof T, string>>;
  }>({
    value: initialState,
    touched: {},
    errors: {},
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.persist();
    const inputName = e.target.name;
    const inputValue = e.target.value;
    setFormState((prevState) => ({
      ...prevState,
      value: { ...prevState.value, [inputName]: trimWhitespace(inputValue) },
    }));
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    e.persist();
    const inputName = e.target.name;
    setFormState((prevState) => ({
      ...prevState,
      touched: { ...prevState.touched, [inputName]: true },
    }));
  };

  useEffect(() => {
    const newErrors = validationFn(formState.value);
    setFormState((prevState) => ({
      ...prevState,
      errors: newErrors,
    }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(formState.value)]);

  return { formState, handleBlur, handleChange };
};

export { useForm };
