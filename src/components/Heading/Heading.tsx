import React from 'react';
import { THeading } from '../../types/Heading/THeading';
import styles from './Heading.module.css';
import Button from '../Button/Button';
import { TButton } from '../../types/Button/TButton';

const Heading: React.FC<THeading & TButton> = ({
  children,
  hasButton = false,
  ...rest
}) => {
  return (
    <div className={styles.heading}>
      <h1>{children}</h1>
      {hasButton && <Button {...rest}></Button>}
    </div>
  );
};

export default Heading;
