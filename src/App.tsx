import { Aside, Button, Container, Form, Main, Summary } from 'components';
import { useStore } from 'store/useStore';
import { checkInputValidity } from 'utils';

import './App.css';

function App() {
  const TOTAL_STEPS = 4;
  const {
    incrementCurrentStep,
    decrementCurrentStep,
    currentStep,
    userInfo,
    errors,
    triggerAllUntouched,
  } = useStore((state) => state);
  const inputIsValid = checkInputValidity(userInfo, errors);

  return (
    <div className="h-full grid md:place-content-center bg-gray-200">
      <Container className="grid grid-cols-container-sm md:grid-cols-container-md md:rounded-2xl md:bg-white md:py-[1rem] md:w-[1024px] md:h-[640px]">
        <Aside className="col-span-full row-start-1 row-end-3 md:rounded-xl md:col-start-2 md:col-span-1" />
        <Main className="py-8 px-6 bg-white space-y-24 col-start-2 col-span-1 row-start-2 row-end-10 self-start rounded-lg md:px-24 md:row-span-1 md:col-start-3 md:col-span-1 md:rounded-none">
          {currentStep === TOTAL_STEPS - 1 ? <Summary /> : <Form />}
        </Main>
        <div className="flex justify-between bg-white col-span-full self-end mt-20 p-[1rem] md:col-start-3 md:col-span-1 md:row-start-2 md:px-24">
          {currentStep > 0 && (
            <Button
              variant="ghost"
              onClick={() => {
                decrementCurrentStep();
              }}
            >
              go back
            </Button>
          )}
          <Button
            className="ml-auto"
            onClick={() => {
              if (currentStep < TOTAL_STEPS && inputIsValid)
                incrementCurrentStep();
              else triggerAllUntouched();
            }}
          >
            next step
          </Button>
        </div>
      </Container>
    </div>
  );
}

export default App;
