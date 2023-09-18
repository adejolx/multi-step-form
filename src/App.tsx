import { Aside, Button, Container, Form, Main, Summary } from 'components';
import { useStore } from 'store/useStore';
import { checkInputValidity } from 'utils';

import './App.css';

function App() {
  const TOTAL_STEPS = 4;
  const {
    incrementCurrentStep,
    decrementCurrentStep,
    setSubscriptionConfirmation,
    subscriptionIsConfirmed,
    currentStep,
    userInfo,
    errors,
    triggerAllUntouched,
    planOption,
    addOnOptions,
    subscriptionPlan,
  } = useStore((state) => state);
  const inputIsValid = checkInputValidity(userInfo, errors);
  const isLastStep = currentStep === TOTAL_STEPS - 1;
  const handleForwardClick = () => {
    if (!isLastStep && inputIsValid) incrementCurrentStep();
    else triggerAllUntouched();
    if (isLastStep) {
      setSubscriptionConfirmation();
      alert(
        JSON.stringify(
          {
            user_name: userInfo.name,
            user_email: userInfo.email,
            user_phone: userInfo.phone,
            subscription_plan: subscriptionPlan,
            selected_plan: planOption,
            selected_addons: addOnOptions,
          },
          null,
          2,
        ),
      );
    }
  };

  return (
    <div className="h-full grid md:place-content-center bg-gray-200">
      <Container className="grid grid-cols-container-sm md:grid-cols-container-md md:rounded-2xl md:bg-white md:py-[1rem] md:w-[1024px] md:h-[640px] md:shadow-2xl">
        <Aside className="col-span-full row-start-1 row-end-3 md:rounded-xl md:col-start-2 md:col-span-1" />
        <Main className="py-12 px-6 bg-white col-start-2 col-span-1 row-start-2 row-end-10 self-start rounded-lg shadow-2xl md:shadow-none md:px-24 md:row-start-1 md:row-end-3 md:col-start-3 md:col-span-1 md:rounded-none">
          {isLastStep ? <Summary /> : <Form />}
        </Main>
        {!subscriptionIsConfirmed && (
          <footer className="flex justify-between bg-white col-span-full self-end mt-20 p-[1rem] md:col-start-3 md:col-span-1 md:row-start-2 md:px-24">
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
              variant={isLastStep ? 'terminal' : 'normal'}
              onClick={handleForwardClick}
            >
              next step
            </Button>
          </footer>
        )}
      </Container>
    </div>
  );
}

export default App;
