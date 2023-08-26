import { StateCreator } from 'zustand';
import { ModalSliceType, StoreType } from './types';

export const createModalSlice: StateCreator<
  StoreType,
  [],
  [],
  ModalSliceType
> = (set) => ({
  currentPosition: 0,
  numberOfStages: 0,
  incrementCurrentPosition: () =>
    set(({ currentPosition, numberOfStages }) => ({
      currentPosition:
        currentPosition < numberOfStages
          ? currentPosition + 1
          : currentPosition,
    })),
  decrementCurrentPosition: () =>
    set(({ currentPosition }) => ({
      currentPosition:
        currentPosition > 0 ? currentPosition - 1 : currentPosition,
    })),
});
