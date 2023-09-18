export type PlanType = 'arcade' | 'advanced' | 'pro';

export type AddOnType =
  | 'online_service'
  | 'larger_storage'
  | 'customizable_profile';

export type UserInfoType = {
  name: string;
  email: string;
  phone: string;
};

export interface UserInfoSliceType {
  userInfo: UserInfoType;
  errors: Partial<UserInfoType>;
  touched: Record<keyof UserInfoType, boolean>;
  setUserInfo: (newUserInfo: Partial<UserInfoType>) => void;
  setErrors: (newErrors: Partial<UserInfoType>) => void;
  setTouched: (
    newtouched: Partial<Record<keyof UserInfoType, boolean>>,
  ) => void;
  triggerAllUntouched: () => void;
}

export interface PlanSliceType {
  planOption: PlanType;
  onPlanChange: (newPlan: PlanType) => void;
}

export interface AddOnSliceType {
  addOnOptions: Array<AddOnType>;
  onAddOnChange: (newAddOn: AddOnType, isChecked: boolean) => void;
}

export interface FormSliceType {
  subscriptionPlan: 'monthly' | 'yearly';
  setSubscriptionPlan: (isChecked: boolean) => void;
}

export interface ModalSliceType {
  currentStep: number;
  subscriptionIsConfirmed: boolean;
  setSubscriptionConfirmation: () => void;
  setCurrentStep: (index: number) => void;
  incrementCurrentStep: () => void;
  decrementCurrentStep: () => void;
}

export interface StoreType
  extends FormSliceType,
    ModalSliceType,
    UserInfoSliceType,
    AddOnSliceType,
    PlanSliceType {}
