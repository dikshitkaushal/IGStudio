import React from "react";
import styles from "./Footer.module.css";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { ReactComponent as Icons } from "../../assets/icons.svg";

const Footer = () => {
  return (
    <div className={styles.footerwrapper}>
      <div className={styles.iconswrapper}>
        <Logo />
        <div className={styles.menu}>
          <div>Home</div>
          <div>Attorneys</div>
          <div>Practice Areas</div>
          <div>About Us</div>
        </div>
        <Icons />
      </div>
      <div>
        <div className={styles.textwrapper}>
          <p className={styles.text}>© 2023 Acme. All right reserved</p>
          <p className={styles.text}>Privacy Policy</p>
          <p className={styles.text}>Terms of Service</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
