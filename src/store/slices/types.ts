type PlanType = 'arcade' | 'advanced' | 'pro';
type AddOnType = 'onlineService' | 'largerStorage' | 'customizableProfile';

export type FormSliceType = {
  data: {
    name: string;
    email: string;
    phone: string;
    plan: Record<PlanType, boolean>;
    addOns: Record<AddOnType, boolean>;
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
