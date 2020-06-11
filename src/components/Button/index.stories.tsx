import React from 'react';
import Button from './index';

export default {
  title: 'Button',
  component: Button
};

export const ToStorybook = () => (
  <Button type="submit">
    Button
  </Button>
);

ToStorybook.story = {
  name: 'Button',
};
