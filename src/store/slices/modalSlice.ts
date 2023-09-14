import { StateCreator } from 'zustand';

import { ModalSliceType, StoreType } from './types';

export const createModalSlice: StateCreator<
  StoreType,
  [],
  [],
  ModalSliceType
> = (set) => ({
  currentStep: 0,
  setCurrentStep: (index: number) =>
    set(() => ({
      currentStep: index,
    })),
  incrementCurrentStep: () =>
    set(({ currentStep }) => ({
      currentStep: currentStep + 1,
    })),
  decrementCurrentStep: () =>
    set(({ currentStep }) => ({
      currentStep: currentStep - 1,
    })),
});
