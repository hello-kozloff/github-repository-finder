import React, { FunctionComponent } from 'react';
import { block } from 'bem-cn';
import { IProps } from './types';
import './index.scss';

/**
 * Section Header Component
 * @param title
 * @param description
 * @param children
 * @constructor
 */
const SectionHeader: FunctionComponent<IProps> = ({
  title,
  description,
  children
}: IProps) => {
  const styleSheet = block('section-header');

  return (
    <div className={styleSheet()}>

      <h3 className={styleSheet('heading')}>
        {title}
      </h3>

      {description ? (
        <p className={styleSheet('description')}>
          {description}
        </p>
      ) : null}

      <div className={styleSheet('content')}>
        {children}
      </div>

    </div>
  );
};

export default SectionHeader;