import React, { FunctionComponent } from 'react';
import { Helmet } from 'react-helmet';
import { block } from 'bem-cn';
import { PageHeader, Navigation } from '../../components';
import './index.scss';

/**
 * Favorites Page
 * @constructor
 */
const FavoritesPage: FunctionComponent = () => {
  const styleSheet = block('favorites-page');

  return (
    <div className={styleSheet()}>

      <Helmet>
        <title>Github Finder / Израбнные репозитории</title>
      </Helmet>

      <div className={styleSheet('header')}>
        <PageHeader title="Github Finder" subtitle="Находи, добавляй в закладки, изучай!">
          <Navigation />
        </PageHeader>
      </div>

      <div className={styleSheet('content')}>

        <h2 className={styleSheet('title')}>
          Избранные репозитории
        </h2>

        <div className={styleSheet('card')}>
          card
        </div>

      </div>

    </div>
  );
};

export default FavoritesPage;