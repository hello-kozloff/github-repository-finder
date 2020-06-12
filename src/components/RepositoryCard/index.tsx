import React, { FunctionComponent } from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { block } from 'bem-cn';
import { addRepository } from '../../redux/actions/recentSearch';
import { IRepository } from '../../redux/types/repository';
import { IProps } from './types';
import './index.scss';

/**
 * Repository Card Component
 * @param id
 * @param html_url
 * @param name
 * @param full_name
 * @param description
 * @param ownerId
 * @param ownerLogin
 * @param ownerAvatarUrl
 * @param addRepository
 * @constructor
 */
const RepositoryCard: FunctionComponent<IProps> = ({
  id,
  name,
  full_name,
  description,
  html_url,
  owner: {
    id: ownerId,
    login: ownerLogin,
    avatar_url: ownerAvatarUrl
  },
  // eslint-disable-next-line no-shadow
  addRepository
}: IProps) => {
  const styleSheet = block('repository-card');

  function handleClick() {
    const repository: IRepository = {
      id,
      name,
      full_name,
      description,
      html_url,
      owner: {
        id: ownerId,
        login: ownerLogin,
        avatar_url: ownerAvatarUrl
      }
    };

    addRepository(repository);
  }

  return (
    <a
      href={html_url}
      target="_blank"
      rel="noopener noreferrer"
      className={styleSheet()}
      onClick={handleClick}
    >

      <strong className={styleSheet('name')}>
        {name}
      </strong>

      <p className={styleSheet('description')}>
        {description}
      </p>

      <div className={styleSheet('owner')}>

        <img
          src={ownerAvatarUrl}
          alt={ownerLogin}
          className={styleSheet('owner-avatar')}
        />

        <span className={styleSheet('owner-login')}>
          {ownerLogin}
        </span>

      </div>

    </a>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    addRepository: bindActionCreators(addRepository, dispatch)
  };
};

export default connect(null, mapDispatchToProps)(RepositoryCard);