import React, { FunctionComponent } from 'react';
import { block } from 'bem-cn';
import { IProps } from './types';
import './index.scss';

/**
 * Button Component
 * @param props
 * @constructor
 */
const Button: FunctionComponent<IProps> = (props: IProps) => {
  const styleSheet = block('button');

  return (
    <button
      {...props}
      type="submit"
      className={styleSheet()}
    />
  );
};

export default Button;