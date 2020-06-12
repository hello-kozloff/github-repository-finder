import React, { FunctionComponent } from 'react';
import { Helmet } from 'react-helmet';
import { block } from 'bem-cn';
import { PageHeader, Navigation, RecentSearch, Features } from '../../components';
import { IProps } from './types';
import './index.scss';

/**
 * Home Page
 * @constructor
 */
const HomePage: FunctionComponent<IProps> = () => {
  const styleSheet = block('home-page');

  return (
    <div className={styleSheet()}>

      <Helmet>
        <title>Github Finder / Главная</title>
      </Helmet>

      <div className={styleSheet('header')}>
        <PageHeader title="Github Finder" subtitle="Находи, добавляй в закладки, изучай!">
          <Navigation />
        </PageHeader>
      </div>

      <div className={styleSheet('content')}>

        <div className={styleSheet('recent-search')}>
          <RecentSearch />
        </div>

        <div className={styleSheet('features')}>
          <Features />
        </div>

      </div>

    </div>
  );
};

export default HomePage;