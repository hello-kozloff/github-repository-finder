import React, { FunctionComponent } from 'react';
import { block } from 'bem-cn';
import { IProps } from './types';
// import { RepositoryCard } from '..';
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
          item
        </div>

      </div>

    </section>
  );
};

export default RecentSearch;