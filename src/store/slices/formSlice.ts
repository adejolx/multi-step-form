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
  // setValidInputStatus: () =>
  //   set(({ validInputStatus }) => ({
  //     validInputStatus: !validInputStatus,
  //   })),
  // onBlur: (validationFn, name) => set(({userInfo, userInfoError}) => ({
  //   userInfoError: {...userInfoError, [name]: validationFn(userInfo[name])}
  // }))
});
