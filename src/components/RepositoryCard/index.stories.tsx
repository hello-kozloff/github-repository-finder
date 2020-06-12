import React from 'react';
import RepositoryCard from './index';

export default {
  title: 'RepositoryCard',
  component: RepositoryCard
};

export const ToStorybook = () => (
  <RepositoryCard
    id={0}
    name="Tetris"
    full_name="Tetris"
    description="A C implementation of Tetris using Pennsim through LC4"
    html_url="https://github.com/dtrupenn/Tetris"
    owner={{
      id: 583923,
      login: 'Kozloff',
      avatar_url: 'https://secure.gravatar.com/avatar/e7956084e75f239de85d3a31bc172ace?d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png'
    }}
  />
);

ToStorybook.story = {
  name: 'RepositoryCard',
};
