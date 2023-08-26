import { create } from 'zustand';
import { createFormSlice, createModalSlice } from './slices';
import { StoreType } from './slices/types';

export const useStore = create<StoreType>((...a) => ({
  ...createModalSlice(...a),
  ...createFormSlice(...a),
}));
