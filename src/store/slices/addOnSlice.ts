import { StateCreator } from 'zustand';

import { AddOnSliceType, StoreType } from './types';

export const createAddOnSlice: StateCreator<
  StoreType,
  [],
  [],
  AddOnSliceType
> = (set) => ({
  addOnOptions: [],
  onAddOnChange: (newAddOn, isChecked) =>
    set(({ addOnOptions }) => ({
      addOnOptions: isChecked
        ? [...addOnOptions, newAddOn]
        : addOnOptions.filter((option) => option !== newAddOn),
    })),
});
