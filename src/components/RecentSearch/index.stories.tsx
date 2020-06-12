import React from 'react';
import RecentSearch from './index';

export default {
  title: 'RecentSearch',
  component: RecentSearch
};

export const ToStorybook = () => (
  <RecentSearch />
);

ToStorybook.story = {
  name: 'RecentSearch',
};
