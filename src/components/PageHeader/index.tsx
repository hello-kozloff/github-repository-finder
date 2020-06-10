import React, { FunctionComponent } from 'react';
import { block } from 'bem-cn';
import { IProps } from './types';
import './index.scss';

/**
 * Page Header Component
 * @param title
 * @param subtitle
 * @param children
 * @constructor
 */
const PageHeader: FunctionComponent<IProps> = ({
  title,
  subtitle,
  children
}: IProps) => {
  const styleSheet = block('page-header');

  return (
    <header className={styleSheet()}>

      <div className={styleSheet('container')}>

        <h1 className={styleSheet('title')}>
          {title}
        </h1>

        {subtitle && (
          <p className={styleSheet('subtitle')}>
            {subtitle}
          </p>
        )}

        {children && (
          <div className={styleSheet('content')}>
            {children}
          </div>
        )}

      </div>

    </header>
  );
};

export default PageHeader;