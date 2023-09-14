export type PlanType = 'arcade' | 'advanced' | 'pro';
export type AddOnType =
  | 'onlineService'
  | 'largerStorage'
  | 'customizableProfile';

export type FormSliceType = {
  name: string;
  email: string;
  phone: string;
  subscriptionPlan: 'monthly' | 'yearly';
  setSubscriptionPlan: (isChecked: boolean) => void;
  addOnOptions: Array<AddOnType>;
  planOption: PlanType;
  onPlanChange: (newPlan: PlanType) => void;
  onAddOnChange: (newAddOn: AddOnType, isChecked: boolean) => void;
  totalAmount: number;
  setTotalAmount: () => void;
};

export type ModalSliceType = {
  currentStep: number;
  setCurrentStep: (index: number) => void;
  incrementCurrentStep: () => void;
  decrementCurrentStep: () => void;
};

export type StoreType = FormSliceType & ModalSliceType;
