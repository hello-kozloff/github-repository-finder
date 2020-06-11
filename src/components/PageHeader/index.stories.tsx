import React from 'react';
import PageHeader from './index';

export default {
  title: 'PageHeader',
  component: PageHeader
};

export const ToStorybook = () => (
  <PageHeader title="Заголовок" subtitle="Под-заголовок" />
);

ToStorybook.story = {
  name: 'PageHeader',
};
