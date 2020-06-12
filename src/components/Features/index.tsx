import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { block } from 'bem-cn';
import { IProps } from './types';
import { RepositoriesGrid, RepositoryCard, SectionHeader } from '..';
import { getFeaturesState } from '../../redux/reducers/features';
import { IRepository } from '../../redux/types/repository';
import IStore from '../../redux/types/store';

/**
 * Features Component
 * @param features
 * @constructor
 */
const Features: FunctionComponent<IProps> = ({
  features
}: IProps) => {
  const styleSheet = block('features');
  const description = !features.length ? 'В поиске вы можете добавить избранные репозитории!' : undefined;

  return (
    <div className={styleSheet()}>
      <SectionHeader title="Избранные репозитории:" description={description}>
        <RepositoriesGrid>
          {features.map((repository: IRepository) => (
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
      </SectionHeader>
    </div>
  );
};

const mapStateToProps = (state: IStore) => {
  return {
    features: getFeaturesState(state).repositories
  };
};

export default connect(mapStateToProps)(Features);