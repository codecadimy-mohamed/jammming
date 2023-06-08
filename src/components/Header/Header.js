import React from "react";
import styles from './Header.module.css';
import appStyles from '../App/App.module.css';

function Header() {

  return (
    <div className={`${styles.header} ${appStyles.header}`}>
      <h1>Ja<span>mmm</span>ing</h1>
    </div>
  );
};

export default Header;