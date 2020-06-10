import React, { FunctionComponent } from 'react';
import { block } from 'bem-cn';
import { IProps } from './types';
import './index.scss';

/**
 * Repository Card Component
 * @param html_url
 * @param name
 * @param description
 * @param ownerLogin
 * @param ownerAvatarUrl
 * @constructor
 */
const RepositoryCard: FunctionComponent<IProps> = ({
  html_url,
  name,
  description,
  owner: {
    login: ownerLogin,
    avatar_url: ownerAvatarUrl
  }
}: IProps) => {
  const styleSheet = block('repository-card');

  return (
    <a href={html_url} target="_blank" rel="noopener noreferrer" className={styleSheet()}>

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