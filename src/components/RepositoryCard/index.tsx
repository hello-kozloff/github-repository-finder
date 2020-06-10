import React, { FunctionComponent } from 'react';
import { block } from 'bem-cn';
import { IProps } from './types';
import './index.scss';

/**
 * Repository Card Component
 * @param url
 * @param name
 * @param description
 * @param ownerLogin
 * @param ownerAvatarUrl
 * @constructor
 */
const RepositoryCard: FunctionComponent<IProps> = ({
  url,
  name,
  description,
  owner: {
    login: ownerLogin,
    avatarUrl: ownerAvatarUrl
  }
}: IProps) => {
  const styleSheet = block('repository-card');

  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className={styleSheet()}>

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

export default RepositoryCard;