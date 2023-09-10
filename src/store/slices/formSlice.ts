import { StateCreator } from 'zustand';

import { FormSliceType, StoreType } from './types';

export const createFormSlice: StateCreator<StoreType, [], [], FormSliceType> = (
  set,
) => ({
  data: {
    name: '',
    email: '',
    phone: '',
    plan: [
      {
        name: 'arcade',
        value: false,
        currency: 'USD',
        price: {
          monthly: 9,
          yearly: 90,
        },
      },
      {
        name: 'advanced',
        value: false,
        currency: 'USD',
        price: {
          monthly: 12,
          yearly: 120,
        },
      },
      {
        name: 'pro',
        value: false,
        currency: 'USD',
        price: {
          monthly: 15,
          yearly: 150,
        },
      },
    ],
    addOns: [
      {
        name: 'onlineService',
        value: false,
        currency: 'USD',
        price: {
          monthly: 1,
          yearly: 10,
        },
      },
      {
        name: 'largerStorage',
        value: false,
        currency: 'USD',
        price: {
          monthly: 2,
          yearly: 20,
        },
      },
      {
        name: 'customizableProfile',
        value: false,
        currency: 'USD',
        price: {
          monthly: 2,
          yearly: 20,
        },
      },
    ],
    totalAmount: -3,
  },
});
