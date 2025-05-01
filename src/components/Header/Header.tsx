import React from 'react';
import { Timer } from 'lucide-react';
import styles from './Header.module.css';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <a className={styles.link} href='#'>
        <Timer color='var(--primary)' size={64} />

        <h1>Chronos</h1>
      </a>
    </header>
  );
};

export default Header;
