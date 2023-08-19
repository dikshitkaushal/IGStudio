import React from "react";
import { ReactComponent as Chooseimage } from "../../../assets/choose.svg";
import styles from "./Card.module.css";

const Card = () => {
  return (
    <div className={styles.cardwrapper}>
      <Chooseimage />
      <h3 style={{ margin: "20px 0px" }}>100% Success Rate</h3>
      <p style={{ lineHeight: "20px", color: "#747474" }}>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequatduis enim velit mollit Exer.
      </p>
      <button className={styles.button}>Read More</button>
    </div>
  );
};

export default Card;
