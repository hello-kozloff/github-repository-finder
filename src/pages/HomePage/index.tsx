import React, { FunctionComponent } from 'react';
import { Helmet } from 'react-helmet';
import { block } from 'bem-cn';
import { PageHeader, Navigation, RecentSearch, Features, SectionWrapper } from '../../components';
import { IProps } from './types';

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

      <div className={styleSheet('recent-search')}>
        <SectionWrapper>
          <RecentSearch />
        </SectionWrapper>
      </div>

      <div className={styleSheet('features')}>
        <SectionWrapper>
          <Features />
        </SectionWrapper>
      </div>
    </div>
  );
};

export default HomePage;