import React from "react";
import styles from "./Teamcard.module.css";

const Teamcard = ({ image, name, cases }) => {
  return (
    <div className={styles.cardwrapper}>
      <img src={image} alt="teammember" />
      <div>
        <p
          className={styles.name}
          style={{ fontSize: "24px", fontWeight: "500", lineHeight: "40px" }}
        >
          {name}
        </p>
        <p style={{ fontSize: "16px", color: "#747474" }}>{cases} Cases</p>
      </div>
    </div>
  );
};

export default Teamcard;
