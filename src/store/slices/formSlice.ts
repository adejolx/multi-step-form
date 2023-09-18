import { StateCreator } from 'zustand';

import { FormSliceType, StoreType } from './types';

export const createFormSlice: StateCreator<StoreType, [], [], FormSliceType> = (
  set,
) => ({
  subscriptionPlan: 'monthly',
  setSubscriptionPlan: (isChecked) =>
    set(() => ({
      subscriptionPlan: !isChecked ? 'monthly' : 'yearly',
    })),
});
