import React from 'react';
import Input from './index';

export default {
  title: 'Input',
  component: Input
};

export const ToStorybook = () => (
  <Input type="text" variant="primary" />
);

ToStorybook.story = {
  name: 'Input',
};
