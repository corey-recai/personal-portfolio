import React from "react";
import styles from "./Header.module.scss";
import Navbar from "components/Navbar";

const Header = () => {
  return (
    <header className={styles.header} id='header'>
      <Navbar />
    </header>
  );
};

export default Header;
