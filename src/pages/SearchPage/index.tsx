import React, { FunctionComponent } from 'react';
import { block } from 'bem-cn';
import './index.scss';

import SearchForm from '../../forms/SearchForm';
import RepositoryCard from '../../components/RepositoryCard';

/**
 * Search Page Component
 * @constructor
 */
const SearchPage: FunctionComponent = () => {
  const styleSheet = block('search-page');

  return (
    <div className={styleSheet()}>

      <div className={styleSheet('header')}>
        <SearchForm search="test" />
      </div>

      <div className={styleSheet('content')}>

        <h2 className={styleSheet('title')}>
          Найдено по запросу 'test':
        </h2>

        <div className={styleSheet('card')}>
          <RepositoryCard
            url="https://github.com/dtrupenn/Tetris"
            name="Tetris"
            description="A C implementation of Tetris using Pennsim through LC4"
            owner={{
              id: 583923,
              login: 'Kozloff',
              avatarUrl: 'https://secure.gravatar.com/avatar/e7956084e75f239de85d3a31bc172ace?d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png'
            }}
          />
        </div>

        <div className={styleSheet('card')}>
          <RepositoryCard
            url="https://github.com/dtrupenn/Tetris"
            name="Tetris"
            description="A C implementation of Tetris using Pennsim through LC4"
            owner={{
              id: 583923,
              login: 'Kozloff',
              avatarUrl: 'https://secure.gravatar.com/avatar/e7956084e75f239de85d3a31bc172ace?d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png'
            }}
          />
        </div>

        <div className={styleSheet('card')}>
          <RepositoryCard
            url="https://github.com/dtrupenn/Tetris"
            name="Tetris"
            description="A C implementation of Tetris using Pennsim through LC4"
            owner={{
              id: 583923,
              login: 'Kozloff',
              avatarUrl: 'https://secure.gravatar.com/avatar/e7956084e75f239de85d3a31bc172ace?d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png'
            }}
          />
        </div>

      </div>
    </div>
  );
};

export default SearchPage;
