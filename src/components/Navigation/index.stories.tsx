import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navigation from './index';

export default {
  title: 'Navigation',
  component: Navigation
};

export const ToStorybook = () => (
  <BrowserRouter>
    <Navigation />
  </BrowserRouter>
);

ToStorybook.story = {
  name: 'Navigation',
};
