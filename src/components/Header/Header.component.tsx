import React from "react";
import styles from "./Header.module.scss";
import { Navbar } from "components/Navbar";

export const Header = () => {
  return (
    <header className={styles.header} id='header'>
      <Navbar />
    </header>
  );
};
