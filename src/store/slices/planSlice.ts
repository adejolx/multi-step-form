import { StateCreator } from 'zustand';

import { PlanSliceType, StoreType } from './types';

export const createPlanSlice: StateCreator<StoreType, [], [], PlanSliceType> = (
  set,
) => ({
  planOption: 'arcade',
  onPlanChange: (newPlan) =>
    set(() => ({
      planOption: newPlan,
    })),
});
