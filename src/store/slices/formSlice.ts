import { StateCreator } from 'zustand';
import { FormSliceType, StoreType } from './types';

export const createFormSlice: StateCreator<StoreType, [], [], FormSliceType> = (
  set,
) => ({
  data: {
    name: '',
    email: '',
    phone: '',
    plan: {
      arcade: false,
      advanced: false,
      pro: false,
    },
    addOns: {
      onlineService: false,
      largerStorage: false,
      customizableProfile: false,
    },
    totalAmount: -3,
  },
});
