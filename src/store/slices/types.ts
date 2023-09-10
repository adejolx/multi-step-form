type PlanType = 'arcade' | 'advanced' | 'pro';
type AddOnType = 'onlineService' | 'largerStorage' | 'customizableProfile';

export type FormSliceType = {
  data: {
    name: string;
    email: string;
    phone: string;
    plan: Array<{
      name: PlanType;
      value: boolean;
      currency: 'USD';
      price: { monthly: number; yearly: number };
    }>;
    addOns: Array<{
      name: AddOnType;
      value: boolean;
      currency: 'USD';
      price: { monthly: number; yearly: number };
    }>;
    totalAmount: number;
  };
};

export type ModalSliceType = {
  currentPosition: number;
  numberOfStages: number;
  incrementCurrentPosition: () => void;
  decrementCurrentPosition: () => void;
};

export type StoreType = FormSliceType & ModalSliceType;
