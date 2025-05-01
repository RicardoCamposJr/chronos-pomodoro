import React from 'react';
import styles from './Form.module.css';
import { TForm } from '../../types/Form/TForm';
import Button from '../Button/Button';
import { CirclePlay } from 'lucide-react';
import Input from '../Input/Input';

const Form: React.FC<TForm> = ({ children }) => {
  return (
    <form action='' className={styles.form}>
      <Input type='text' name='task' id='task' placeholder='Digite algo'>
        Task
      </Input>

      {children}

      <Button
        size='extraLarge'
        type='submit'
        icon={<CirclePlay color='black' size={24} />}
      ></Button>
    </form>
  );
};

export default Form;
