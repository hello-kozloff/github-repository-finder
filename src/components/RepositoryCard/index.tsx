import React, { FunctionComponent } from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { block } from 'bem-cn';
import { addRepository } from '../../redux/actions/recentSearch';
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
    <a
      href={html_url}
      target="_blank"
      rel="noopener noreferrer"
      className={styleSheet()}
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