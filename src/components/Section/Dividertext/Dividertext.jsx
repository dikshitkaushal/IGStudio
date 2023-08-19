import React from "react";
import styles from "./Dividertext.module.css";

const Dividertext = () => {
  return (
    <div className={styles.dividerwrapper}>
      <div
        style={{
          width: "50%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div style={{ width: "20rem" }}>
          <p
            style={{
              fontSize: "40px",
              lineHeight: "60px",
              fontWeight: "150px",
            }}
          >
            Let's Introduce Ourself
          </p>
        </div>

        <div></div>
      </div>
      <div>
        <div className={styles.vr}></div>
      </div>
      <div style={{ width: "50%" }}>
        <h3 style={{ lineHeight: "50px" }}>Criminal Lawyer</h3>
        <p style={{ color: "#727272", lineHeight: "24px" }}>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequatduis enim velit mollit Exercitation.
        </p>
      </div>
    </div>
  );
};

export default Dividertext;
