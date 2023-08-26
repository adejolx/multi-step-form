type FormProps = {
  children: React.ReactNode;
};

const Form = ({ children }: FormProps) => {
  return (
    <>
      <Form>{children}</Form>
    </>
  );
};

export { Form };
