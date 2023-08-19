import React from "react";
import styles from "./Subscription.module.css";

const Subscription = () => {
  return (
    <div className={styles.subswrapper}>
      <p style={{ fontSize: "40px" }}>Subscribe Our Newsletter</p>
      <div className={styles.formwrapper}>
        <input
          className={styles.input}
          style={{
            borderTopLeftRadius: "10px",
            borderBottomLeftRadius: "10px",
          }}
          type="text"
          placeholder="Name"
        ></input>
        <input
          className={styles.input}
          type="text"
          placeholder="Enter your Email"
        ></input>
        <button className={styles.button}>SEND</button>
      </div>
    </div>
  );
};

export default Subscription;
