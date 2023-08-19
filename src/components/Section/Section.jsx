import React from "react";
import Dividertext from "./Dividertext/Dividertext";
import Choose from "./Choose/Choose";
import Practicearea from "./Practicearea/Practicearea";
import styles from "./Section.module.css";
import Clients from "./Clients/Clients";
import Team from "./Team/Team";
import Faq from "./Faq/Faq";

const Section = () => {
  return (
    <div className={styles.sectionwrapper}>
      <Dividertext />
      <Choose />
      <Practicearea />
      <Clients />
      <Team />
      <Faq />
    </div>
  );
};

export default Section;
