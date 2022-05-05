import React from 'react';
import AppButton from '../../components/0_atoms/AppButton';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  text: 'Button',
  clickButton: () => alert('HOGE'),
  component: AppButton,
} as ComponentMeta<typeof AppButton>;

export const Primary: ComponentStory<typeof AppButton> = () => (
  <AppButton text={'BUTTON'} clickButton={() => alert('HOGE')} />
);
