import { useEffect } from 'react';
import { FrontMatter, Input } from 'components';
import { UserInfoType } from 'store/slices/types';
import { useStore } from 'store/useStore';

const validationFn = (state: UserInfoType) => {
  const errors: Partial<UserInfoType> = {};
  const emailRegex =
    /^[\w-]+(\.[\w-]+)*@[a-zA-Z\d-]+(\.[a-zA-Z\d-]+)*\.[a-zA-Z]{1,}$/;
  const phoneephoneRegex = /^\+\d{9,13}$/;

  if (!state.name) errors.name = 'This field is required';

  if (!state.email) errors.email = 'This field is required';
  if (state.email && !emailRegex.test(state.email))
    errors.email = 'errors email';

  if (!state.phone) errors.phone = 'This field is required';
  if (state.phone && !phoneephoneRegex.test(state.phone))
    errors.phone = 'errors phone number';

  return errors;
};

const InfoFieldsContainer = () => {
  const { userInfo, setErrors, setUserInfo, setTouched, touched, errors } =
    useStore((state) => state);

  useEffect(() => {
    setErrors(validationFn(userInfo));
  }, [
    userInfo.name,
    userInfo.email,
    userInfo.phone,
    touched.name,
    touched.email,
    touched.phone,
  ]);
  return (
    <>
      <FrontMatter
        title="Personal info"
        description="Please provide your name, email address and phone number"
      />
      <div className="space-y-4">
        <Input
          label="Name"
          name="name"
          required
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setUserInfo({ [e.target.name]: e.target.value })
          }
          onBlur={(e: React.ChangeEvent<HTMLInputElement>) =>
            setTouched({ [e.target.name]: true })
          }
          error={touched.name && errors.name ? errors.name : ''}
          className="w-full"
          value={userInfo.name}
        />
        <Input
          label="Email Address"
          name="email"
          type="email"
          required
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setUserInfo({ [e.target.name]: e.target.value })
          }
          onBlur={(e: React.ChangeEvent<HTMLInputElement>) =>
            setTouched({ [e.target.name]: true })
          }
          error={touched.email && errors.email ? errors.email : ''}
          className="w-full"
          value={userInfo.email}
        />

        <Input
          label="Phone Number"
          name="phone"
          type="tel"
          required
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setUserInfo({ [e.target.name]: e.target.value })
          }
          onBlur={(e: React.ChangeEvent<HTMLInputElement>) =>
            setTouched({ [e.target.name]: true })
          }
          error={touched.phone && errors.phone ? errors.phone : ''}
          className="w-full"
          value={userInfo.phone}
        />
      </div>
    </>
  );
};

export default InfoFieldsContainer;
