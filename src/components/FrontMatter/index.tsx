import { cn } from 'utils';

interface FrontMatterProps {
  title: string;
  description: string;
  className?: string;
}
const FrontMatter = ({ title, description, className }: FrontMatterProps) => {
  return (
    <div className={cn('mb-8 space-y-4', className)}>
      <h1 className={cn('text-4xl text-blue-400 font-bold')}>{title}</h1>
      <p className="">{description}</p>
    </div>
  );
};

export { FrontMatter };
