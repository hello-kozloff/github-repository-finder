import React, { FunctionComponent, useState, ChangeEvent } from 'react';
import { block } from 'bem-cn';
import { IProps } from './types';
import './index.scss';

/**
 * Input Component
 * @param props
 * @constructor
 */
const Input: FunctionComponent<IProps> = (props: IProps) => {
  const { value: propsValue, variant } = props;
  const [value, setValue] = useState(propsValue);
  const styleSheet = block('input');

  /**
   * The handle change event.
   * @param event
   */
  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const { onChange } = props;
    const {
      target: {
        value: eventValue
      }
    } = event;

    onChange && onChange(event);
    setValue(eventValue);
  }

  return (
    <input
      {...props}
      value={value}
      onChange={handleChange}
      className={styleSheet({
        variant
      })}
    />
  );
};

export default Input;
