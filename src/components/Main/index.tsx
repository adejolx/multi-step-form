interface MainProps {
  children: React.ReactNode;
  className?: string;
}
const Main = ({ children, className }: MainProps) => {
  return <main className={className}>{children}</main>;
};

export { Main };
