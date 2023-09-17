import advancedSvg from 'assets/icon-advanced.svg';
import arcadeSvg from 'assets/icon-arcade.svg';
import proSvg from 'assets/icon-pro.svg';
import { AddOnProps, PlanProps } from 'components';

export const switchAddOnPricing = (subscriptionPlan: 'monthly' | 'yearly') => {
  switch (subscriptionPlan) {
    case 'yearly':
      return {
        online_service: 10,
        larger_storage: 20,
        customizable_profile: 20,
      };
    case 'monthly':
    default:
      return {
        online_service: 1,
        larger_storage: 2,
        customizable_profile: 2,
      };
  }
};

export const switchPlanPricing = (subscriptionPlan: 'monthly' | 'yearly') => {
  switch (subscriptionPlan) {
    case 'yearly':
      return {
        arcade: 90,
        advanced: 120,
        pro: 150,
      };
    case 'monthly':
    default:
      return {
        arcade: 9,
        advanced: 12,
        pro: 15,
      };
  }
};

export const addOnPropsList: Array<
  Omit<AddOnProps, 'isChecked' | 'onCheckedChange' | 'price'>
> = [
  {
    title: 'Online service',
    description: 'Access to multiplayer games',
    name: 'addOn',
    value: 'online_service',
  },
  {
    title: 'Larger Storage',
    description: 'Extra 1TB of cloud save',
    name: 'addOn',
    value: 'larger_storage',
  },
  {
    title: 'Customizable Profile',
    description: 'Custom theme on your profile',
    name: 'addOn',
    value: 'customizable_profile',
  },
];

export const planPropsList: Array<
  Omit<PlanProps, 'onChange' | 'checked' | 'description' | 'price'>
> = [
  {
    imgUrl: arcadeSvg,
    title: 'Arcade',
    value: 'arcade',
    name: 'plan',
  },
  {
    imgUrl: advancedSvg,
    title: 'Advanced',
    value: 'advanced',
    name: 'plan',
  },
  {
    imgUrl: proSvg,
    title: 'Pro',
    value: 'pro',
    name: 'plan',
  },
];
