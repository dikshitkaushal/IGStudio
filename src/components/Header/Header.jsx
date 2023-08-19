import React from "react";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.headerwrapper}>
      <Logo />
      <div className={styles.menu}>
        <div>Home</div>
        <div>Attorneys</div>
        <div>Practice Areas</div>
        <div>About Us</div>
      </div>
      <div>
        <button className={styles.button}>Contact Now</button>
      </div>
    </div>
  );
};

export default Header;
