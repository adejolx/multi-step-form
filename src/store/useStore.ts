import { create } from 'zustand';

import { createFormSlice, createModalSlice } from './slices';
import { createAddOnSlice } from './slices/addOnSlice';
import { createPlanSlice } from './slices/planSlice';
import { StoreType } from './slices/types';
import { createUserInfoSlice } from './slices/userInfoSlice';

export const useStore = create<StoreType>((...a) => ({
  ...createModalSlice(...a),
  ...createFormSlice(...a),
  ...createUserInfoSlice(...a),
  ...createPlanSlice(...a),
  ...createAddOnSlice(...a),
}));
