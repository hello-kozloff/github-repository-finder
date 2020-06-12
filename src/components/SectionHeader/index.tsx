import React, { FunctionComponent } from 'react';
import { block } from 'bem-cn';
import { IProps } from './types';
import './index.scss';

/**
 * Section Header Component
 * @param title
 * @param description
 * @constructor
 */
const SectionHeader: FunctionComponent<IProps> = ({
  title,
  description
}: IProps) => {
  const styleSheet = block('section-header');

  return (
    <div className={styleSheet()}>

      <h3 className={styleSheet('heading')}>
        {title}
      </h3>

      {description ? (
        <p className={styleSheet('description')}>
          Description
        </p>
      ) : null}

    </div>
  );
};

export default SectionHeader;