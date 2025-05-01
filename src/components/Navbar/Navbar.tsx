import React from 'react';
import styles from './Navbar.module.css';
import Button from '../Button/Button';
import { Timer, Home, Settings, SunDim } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <Button
        buttonColor='primary'
        icon={<Home color='black' size={24} />}
        link='/#'
      />
      <Button
        buttonColor='primary'
        icon={<Timer color='black' size={24} />}
        link='/history'
      />
      <Button
        buttonColor='primary'
        icon={<Settings color='black' size={24} />}
        link='/settings'
      />
      <Button buttonColor='primary' icon={<SunDim color='black' size={24} />} />
    </nav>
  );
};

export default Navbar;
