import React from "react";
import Grid from "@mui/material/Grid";
import styles from "./Practicearea.module.css";
import image1 from "../../../assets/image1.png";
import image2 from "../../../assets/image2.png";
import image3 from "../../../assets/image3.png";
import image4 from "../../../assets/image4.png";
import image5 from "../../../assets/image5.png";
import image6 from "../../../assets/image6.png";

const Practicearea = () => {
  return (
    <div className={styles.practicewrapper}>
      <h1 style={{ marginBottom: "100px" }}>Area of Practices</h1>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <div className={styles.imagewrapper}>
            <img className={styles.gridimage} src={image1} alt="praticeimage" />
            <h4 className={styles.imagetxt}>BUSINESS LAW</h4>
          </div>
        </Grid>
        <Grid item xs={4}>
          <div className={styles.imagewrapper}>
            <img className={styles.gridimage} src={image2} alt="praticeimage" />
            <h4 className={styles.imagetxt}>Partnership LAW</h4>
          </div>
        </Grid>
        <Grid item xs={4}>
          <div className={styles.imagewrapper}>
            <img className={styles.gridimage} src={image3} alt="praticeimage" />
            <h4 className={styles.imagetxt}>REAL ESTATE LAW</h4>
          </div>
        </Grid>
        <Grid item xs={8}>
          <div className={styles.imagewrapper}>
            <img className={styles.gridimage} src={image4} alt="praticeimage" />
            <h4 className={styles.imagetxt}>LANDLORD DISPUTES</h4>{" "}
          </div>
        </Grid>
        <Grid item xs={8}>
          <div className={styles.imagewrapper}>
            <img className={styles.gridimage} src={image5} alt="praticeimage" />
            <h4 className={styles.imagetxt}>ELDER ABUSE</h4>{" "}
          </div>
        </Grid>
        <Grid item xs={4}>
          <div className={styles.imagewrapper}>
            <img className={styles.gridimage} src={image6} alt="praticeimage" />
            <h4 className={styles.imagetxt}>BUSINESS LAW</h4>{" "}
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Practicearea;
