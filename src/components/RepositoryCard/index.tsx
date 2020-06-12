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
    <div className={styleSheet()}>

      <button type="button" className={styleSheet('favorite')}>
        <svg height="16" className="octicon octicon-star-fill" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true">
          <path fillRule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25z" />
        </svg>
      </button>

      <a
        href={html_url}
        target="_blank"
        rel="noopener noreferrer"
        className={styleSheet('box')}
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
    </div>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    addRepository: bindActionCreators(addRepository, dispatch)
  };
};

export default connect(null, mapDispatchToProps)(RepositoryCard);