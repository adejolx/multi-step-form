import { StateCreator } from 'zustand';

import { FormSliceType, StoreType } from './types';

export const createFormSlice: StateCreator<StoreType, [], [], FormSliceType> = (
  set,
) => ({
  name: '',
  email: '',
  phone: '',
  subscriptionPlan: 'monthly',
  setSubscriptionPlan: (isChecked) =>
    set(() => ({
      subscriptionPlan: !isChecked ? 'monthly' : 'yearly',
    })),
  addOnOptions: [],
  planOption: 'arcade',
  onPlanChange: (newPlan) =>
    set(() => ({
      planOption: newPlan,
    })),
  onAddOnChange: (newAddOn, isChecked) =>
    set(({ addOnOptions }) => ({
      addOnOptions: isChecked
        ? [...addOnOptions, newAddOn]
        : addOnOptions.filter((option) => option !== newAddOn),
    })),
  totalAmount: -3,
  setTotalAmount: () => set(() => ({})),
});
