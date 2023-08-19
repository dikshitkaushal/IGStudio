import React from "react";
import styles from "./Hero.module.css";
import Search from "./Search/Search";
import { ReactComponent as Heroimage } from "../../assets/heroimage.svg";

const Hero = () => {
  return (
    <div className={styles.herowrapper}>
      <div className={styles.herotext}>
        <p style={{ fontSize: "60px", lineHeight: "100px" }}>
          You don’t have to
        </p>
        <p style={{ fontSize: "60px", fontWeight: "bold" }}>
          Fight them Alone.
        </p>
        <p style={{ color: "#747474", margin: "30px 0px" }}>
          Lorem ipsum dolor sit amet consectetur adipiscing elit blandit,
          curabitur sodales conubia ut inceptos faucibus himenaeos tortor eget,
          hac massa gravida arcu interdum proin curae.
        </p>
        <Search />
      </div>
      <div className={styles.heroimage}>
        <Heroimage />
      </div>
    </div>
  );
};

export default Hero;
