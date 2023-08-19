import React from "react";
import styles from "./Team.module.css";
import team1 from "../../../assets/Team1.png";
import team2 from "../../../assets/Team2.png";
import team3 from "../../../assets/Team3.png";
import team4 from "../../../assets/Team4.png";
import team5 from "../../../assets/Team5.png";
import team6 from "../../../assets/Team6.png";
import Teamcard from "./Teamcard/Teamcard";

const Team = () => {
  return (
    <div className={styles.teamwrapper}>
      <p style={{ fontSize: "40px", fontWeight: "500" }}>Our Team</p>
      <div className={styles.teamcardwrapper}>
        <Teamcard image={team1} name="Danial Def" cases="301" />
        <Teamcard image={team2} name="Sanfole" cases="850" />
        <Teamcard image={team3} name="Cesforila" cases="470" />
        <Teamcard image={team4} name="Coleen" cases="180" />
        <Teamcard image={team5} name="Haldone" cases="212" />
        <Teamcard image={team6} name="Nik Jeo" cases="350" />
      </div>
    </div>
  );
};

export default Team;
