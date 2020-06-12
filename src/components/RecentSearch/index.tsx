import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { block } from 'bem-cn';
import { getRecentSearchState } from '../../redux/reducers/recentSearch';
import { IProps } from './types';
import IStore from '../../redux/types/store';
import { IRepository } from '../../redux/types/repository';
import { RepositoryCard, RepositoriesGrid, SectionHeader } from '..';

/**
 * Recent Search Component
 * @constructor
 */
const RecentSearch: FunctionComponent<IProps> = ({
  repositories
}: IProps) => {
  const styleSheet = block('recent-search');
  const description = !repositories.length ? 'Результаты не найдены. Воспользуйтесь поиском.' : undefined;

  return (
    <section className={styleSheet()}>
      <SectionHeader title="Последние результаты:" description={description}>
        {repositories.length !== 0 ? (
          <RepositoriesGrid>
            {repositories.map((repository: IRepository) => (
              <RepositoryCard
                key={repository.id}
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
            ))}
          </RepositoriesGrid>
        ) : null}
      </SectionHeader>
    </section>
  );
};

const mapStateToProps = (state: IStore) => {
  return {
    repositories: getRecentSearchState(state).repositories
  };
};

export default connect(mapStateToProps)(RecentSearch);