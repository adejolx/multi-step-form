import advancedSvg from 'assets/icon-advanced.svg';
import arcadeSvg from 'assets/icon-arcade.svg';
import proSvg from 'assets/icon-pro.svg';
import { AddOnProps, PlanProps } from 'components';

export const switchAddOnSubscriptionPlan = (
  subscriptionPlan: 'monthly' | 'yearly',
) => {
  switch (subscriptionPlan) {
    case 'yearly':
      return {
        onlineService: 10,
        largerStorage: 20,
        customizableProfile: 20,
      };
    case 'monthly':
    default:
      return {
        onlineService: 1,
        largerStorage: 2,
        customizableProfile: 2,
      };
  }
};

export const switchPlanSubscription = (
  subscriptionPlan: 'monthly' | 'yearly',
) => {
  switch (subscriptionPlan) {
    case 'yearly':
      return {
        arcade: 10,
        advanced: 20,
        pro: 20,
      };
    case 'monthly':
    default:
      return {
        arcade: 1,
        advanced: 2,
        pro: 2,
      };
  }
};

export const addOnPropsList: Array<
  Omit<AddOnProps, 'price' | 'isChecked' | 'onCheckedChange'>
> = [
  {
    title: 'Online service',
    description: 'Access to multiplayer games',
    name: 'addOn',
    value: 'onlineService',
  },
  {
    title: 'Larger Storage',
    description: 'Extra 1TB of cloud save',
    name: 'addOn',
    value: 'largerStorage',
  },
  {
    title: 'Customizable Profile',
    description: 'Custom theme on your profile',
    name: 'addOn',
    value: 'customizableProfile',
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
