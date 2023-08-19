import React from "react";
import styles from "./Choose.module.css";
import Card from "../Card/Card";

const Choose = () => {
  return (
    <div className={styles.choosewrapper}>
      <h1>Why Choose us?</h1>
      <div
        style={{
          width: "100%",
          marginTop: "100px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Choose;
