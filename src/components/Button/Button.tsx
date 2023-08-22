import React from 'react';

import { ButtonInterface } from './button.interface';

import styles from './button.module.scss';

const Button = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  disabled = false,
  ...props
}: ButtonInterface) => {
  const mode = primary ? styles['ui-button--primary'] : styles['ui-button--secondary'];
  return (
    <button
      type="button"
      className={['ui-button', `ui-button--${size}`, mode].join(' ')}
      style={{ backgroundColor }}
      disabled={disabled}
      {...props}
    >
      {label}
    </button>
  );
};

export default Button;
