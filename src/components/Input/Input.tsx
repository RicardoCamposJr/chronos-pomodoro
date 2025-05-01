import React from 'react';
import styles from './Input.module.css';
import { TInput } from '../../types/Input/TInput';

const Input: React.FC<TInput> = ({ children, ...rest }) => {
  return (
    <div className={styles.inputForm}>
      <label htmlFor={rest.id}>{children}</label>
      <input {...rest} />
    </div>
  );
};

export default Input;
