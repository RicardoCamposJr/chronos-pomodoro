import React from 'react';
import { TButton } from '../../types/Button/TButton';
import styles from './Button.module.css';
import clsx from 'clsx';

const Button: React.FC<TButton> = ({
  buttonColor = 'primary',
  size = 'small',
  icon,
  textButton,
  buttonFunction,
  link,
}) => {
  return (
    <>
      <button
        onClick={buttonFunction}
        className={clsx(styles.button, styles[buttonColor], styles[size])}
      >
        {link ? (
          <a href={link}>{icon ? icon : textButton}</a>
        ) : icon ? (
          icon
        ) : (
          textButton
        )}
      </button>
    </>
  );
};

export default Button;
