import { cn } from 'utils';

interface FrontMatterProps {
  title: string;
  description: string;
  align?: 'left' | 'center';
}
const FrontMatter = ({
  title,
  description,
  align = 'left',
}: FrontMatterProps) => {
  return (
    <div className="mb-8">
      <h1
        className={cn(
          'text-2xl text-blue-400 font-bold',
          align === 'left' && 'text-left',
          align === 'center' && 'text-center',
        )}
      >
        {title}
      </h1>
      <p className="">{description}</p>
    </div>
  );
};

export { FrontMatter };
