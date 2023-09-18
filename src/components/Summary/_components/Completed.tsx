import completedSvg from 'assets/icon-thank-you.svg';
import { FrontMatter } from 'components';

const Completed = () => {
  return (
    <div className="h-full grid gap-8 place-items-center">
      <img src={completedSvg} alt="" />
      <FrontMatter
        title="Thank you!"
        description="Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com"
        className="text-center"
      />
    </div>
  );
};

export { Completed };
