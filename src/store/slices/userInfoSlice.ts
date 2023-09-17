import { StateCreator } from 'zustand';

import { StoreType, UserInfoSliceType } from './types';

export const createUserInfoSlice: StateCreator<
  StoreType,
  [],
  [],
  UserInfoSliceType
> = (set) => ({
  userInfo: {
    name: '',
    email: '',
    phone: '',
  },
  errors: {},
  touched: {
    name: false,
    email: false,
    phone: false,
  },
  setUserInfo: (newUserInfo) =>
    set(({ userInfo }) => ({
      userInfo: { ...userInfo, ...newUserInfo },
    })),
  setErrors: (newErrors) =>
    set(() => ({
      errors: newErrors,
    })),
  setTouched: (newtouched) =>
    set(({ touched }) => ({
      touched: { ...touched, ...newtouched },
    })),
  setAllTouchedToTrue: () =>
    set(({ touched }) => ({
      touched: { ...touched, ...{ name: true, email: true, phone: true } },
    })),
});
