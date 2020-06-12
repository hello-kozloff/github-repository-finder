import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { block } from 'bem-cn';
import { getRecentSearchState } from '../../redux/reducers/recentSearch';
import { IProps } from './types';
import IStore from '../../redux/types/store';
import { IRepository } from '../../redux/types/repository';
import { RepositoryCard } from '..';
import './index.scss';

/**
 * Recent Search Component
 * @constructor
 */
const RecentSearch: FunctionComponent<IProps> = ({
  repositories
}: IProps) => {
  const styleSheet = block('recent-search');

  return (
    <section className={styleSheet()}>

      <h3 className={styleSheet('heading')}>
        Последние 3 результата:
      </h3>

      {!repositories.length ? (
        <p className={styleSheet('description')}>
          Результаты не найдены. Воспользуйтесь поиском.
        </p>
      ) : (
        <div className={styleSheet('grid')}>

          {repositories.map((repository: IRepository) => (
            <div key={repository.id} className={styleSheet('item')}>
              <RepositoryCard
                id={repository.id}
                name={repository.name}
                full_name={repository.full_name}
                description={repository.description}
                html_url={repository.html_url}
                owner={{
                  id: repository.owner.id,
                  login: repository.owner.login,
                  avatar_url: repository.owner.avatar_url
                }}
              />
            </div>
          ))}

        </div>
      )}

    </section>
  );
};

const mapStateToProps = (state: IStore) => {
  return {
    repositories: getRecentSearchState(state).repositories
  };
};

export default connect(mapStateToProps)(RecentSearch);