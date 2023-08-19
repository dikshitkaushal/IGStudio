import React from "react";
import styles from "./Search.module.css";
import { ReactComponent as Messageicon } from "../../../assets/messageicon.svg";

const Search = () => {
  return (
    <div className={styles.buttonIn}>
      <Messageicon className={styles.icon} />
      <input
        type="text"
        placeholder="Enter your email address"
        className={styles.input}
      />
      <button className={styles.button}>Let's Talk</button>
    </div>
  );
};

export default Search;
