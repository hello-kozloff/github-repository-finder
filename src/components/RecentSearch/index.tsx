import React, { FunctionComponent } from 'react';
import { block } from 'bem-cn';
import { IProps } from './types';
import { RepositoryCard } from '..';
import './index.scss';

/**
 * Recent Search Component
 * @constructor
 */
const RecentSearch: FunctionComponent<IProps> = () => {
  const styleSheet = block('recent-search');

  return (
    <section className={styleSheet()}>

      <h3 className={styleSheet('heading')}>
        Последние 3 результата:
      </h3>

      <div className={styleSheet('grid')}>

        <div className={styleSheet('item')}>
          <RepositoryCard
            html_url="https://github.com/dtrupenn/Tetris"
            name="Tetris"
            description="A C implementation of Tetris using Pennsim through LC4"
            owner={{
              id: 583923,
              login: 'Kozloff',
              avatar_url: 'https://secure.gravatar.com/avatar/e7956084e75f239de85d3a31bc172ace?d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png'
            }}
          />
        </div>

        <div className={styleSheet('item')}>
          <RepositoryCard
            html_url="https://github.com/dtrupenn/Tetris"
            name="Tetris"
            description="A C implementation of Tetris using Pennsim through LC4"
            owner={{
              id: 583923,
              login: 'Kozloff',
              avatar_url: 'https://secure.gravatar.com/avatar/e7956084e75f239de85d3a31bc172ace?d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png'
            }}
          />
        </div>

        <div className={styleSheet('item')}>
          <RepositoryCard
            html_url="https://github.com/dtrupenn/Tetris"
            name="Tetris"
            description="A C implementation of Tetris using Pennsim through LC4"
            owner={{
              id: 583923,
              login: 'Kozloff',
              avatar_url: 'https://secure.gravatar.com/avatar/e7956084e75f239de85d3a31bc172ace?d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png'
            }}
          />
        </div>

      </div>

    </section>
  );
};

export default RecentSearch;