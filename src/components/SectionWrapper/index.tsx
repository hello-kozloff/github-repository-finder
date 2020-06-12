import React, { FunctionComponent } from 'react';
import { block } from 'bem-cn';
import { IProps } from './types';
import './index.scss';

/**
 * Section Wrapper Component
 * @param children
 * @constructor
 */
const SectionWrapper: FunctionComponent<IProps> = ({
  children
}: IProps) => {
  const styleSheet = block('section-wrapper');

  return (
    <div className={styleSheet()}>
      <div className={styleSheet('container')}>
        {children}
      </div>
    </div>
  );
};

export default SectionWrapper;