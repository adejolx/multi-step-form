import { FrontMatter, Input } from 'components';

interface useFormType {
  formState: {
    value: {
      name: string;
      email: string;
      tel: string;
    };
    touched: Partial<Record<'name' | 'email' | 'tel', boolean>>;
    errors: Partial<Record<'name' | 'email' | 'tel', string>>;
  };
  handleBlur: (e: React.FocusEvent<HTMLInputElement, Element>) => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Info = ({ handleBlur, handleChange, formState }: useFormType) => {
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
          onChange={handleChange}
          onBlur={handleBlur}
          error={
            formState.touched.name && formState.errors.name
              ? formState.errors.name
              : ''
          }
          className="w-full"
        />
        <Input
          label="Email Address"
          name="email"
          type="email"
          required
          onChange={handleChange}
          onBlur={handleBlur}
          error={
            formState.touched.email && formState.errors.email
              ? formState.errors.email
              : ''
          }
          className="w-full"
        />

        <Input
          label="Phone Number"
          name="tel"
          type="tel"
          required
          onChange={handleChange}
          onBlur={handleBlur}
          error={
            formState.touched.tel && formState.errors.tel
              ? formState.errors.tel
              : ''
          }
          className="w-full"
        />
      </div>
    </>
  );
};

export default Info;
