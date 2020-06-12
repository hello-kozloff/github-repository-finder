import React, { FunctionComponent } from 'react';
import { block } from 'bem-cn';
import { IProps } from './types';
import './index.scss';

/**
 * Repositories Grid Component
 * @param children
 * @constructor
 */
const RepositoriesGrid: FunctionComponent<IProps> = ({
  children
}: IProps) => {
  const styleSheet = block('repositories-grid');

  return (
    <div className={styleSheet()}>
      {children.map((repository) => (
        // eslint-disable-next-line react/jsx-key
        <div className={styleSheet('card')}>
          {repository}
        </div>
      ))}
    </div>
  );
};

export default RepositoriesGrid;