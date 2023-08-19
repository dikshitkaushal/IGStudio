import React from "react";
import styles from "./Clientcard.module.css";

const Clientcard = ({ image, name }) => {
  return (
    <div className={styles.cardwrapper}>
      <img src={image} alt="clientimage" />
      <h3 style={{ margin: "20px 0px 5px 0px" }}>{name}</h3>
      <p style={{ fontSize: "12px" }}>Ceo of Hunt</p>
      <p style={{ marginTop: "20px", lineHeight: "20px", color: "#747474" }}>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequatduis enim velit mollit Exer. sit aliqua
        dolor do amet sint. Velit officia
      </p>
    </div>
  );
};

export default Clientcard;
