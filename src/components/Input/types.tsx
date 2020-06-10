import { InputHTMLAttributes } from 'react';

export interface IProps extends InputHTMLAttributes<HTMLInputElement> {

  /**
   |--------------------------------------------------------------------------
   | Variant style. (Required)
   |--------------------------------------------------------------------------
   */
  variant: 'primary';

}