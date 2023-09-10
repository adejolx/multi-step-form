import { Stage } from '../Stage';

const stepsArray: Array<{ step: number; title: string }> = [
  {
    step: 1,
    title: 'your info',
  },
  {
    step: 2,
    title: 'select plan',
  },
  {
    step: 3,
    title: 'add-ons',
  },
  {
    step: 4,
    title: 'summary',
  },
];

const Aside = () => {
  return (
    <ul className="flex justify-center gap-4 bg-blue-300 bg-sidebarMobile bg-origin-border bg-center bg-no-repeat bg-cover md:block md:space-y-8 md:bg-sidebarDesktop px-8 pt-8 pb-12">
      {stepsArray.map(({ step, title }) => {
        return (
          <li key={title}>
            <Stage
              step={step}
              title={title}
              onStepChange={() => console.log(step)}
            />
          </li>
        );
      })}
    </ul>
  );
};

export { Aside };
