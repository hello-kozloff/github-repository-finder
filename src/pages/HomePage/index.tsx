import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { block } from 'bem-cn';
import {PageHeader, Navigation, RepositoryCard, RepositoriesGrid, RecentSearch} from '../../components';
import { getFeaturesState } from '../../redux/reducers/features';
import IStore from '../../redux/types/store';
import { IRepository } from '../../redux/types/repository';
import { IProps } from './types';
import './index.scss';

/**
 * Home Page
 * @constructor
 */
const HomePage: FunctionComponent<IProps> = ({
  features
}: IProps) => {
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

        <div className={styleSheet('favorites')}>
          <h2 className={styleSheet('title')}>
            Избранные репозитории
          </h2>

          {!features.length ? (
            <p className={styleSheet('description')}>
              В поиске вы можете добавить избранные репозитории!
            </p>
          ) : null}

          <div className={styleSheet('grid')}>
            <RepositoriesGrid>
              {features.map((feature: IRepository) => (
                <RepositoryCard
                  key={feature.id}
                  id={feature.id}
                  name={feature.name}
                  full_name={feature.full_name}
                  description={feature.description}
                  html_url={feature.html_url}
                  owner={{
                    id: feature.owner.id,
                    login: feature.owner.login,
                    avatar_url: feature.owner.avatar_url
                  }}
                />
              ))}
            </RepositoriesGrid>
          </div>
        </div>

      </div>

    </div>
  );
};

const mapStateToProps = (state: IStore) => {
  return {
    features: getFeaturesState(state).repositories
  };
};

export default connect(mapStateToProps)(HomePage);