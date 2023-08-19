import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import styles from "./Faq.module.css";

const Faq = () => {
  return (
    <div className={styles.faqwrapper}>
      <p style={{ fontSize: "40px", fontWeight: "500" }}>FAQ</p>
      <div className={styles.textwrapper}>
        <div style={{ width: "50%" }}>
          <p style={{ width: "70%", color: "#747474" }}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint.
          </p>
        </div>
        <div style={{ width: "50%" }}>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "#e3b748" }} />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              sx={{
                backgroundColor: "#1e1e1e",
                color: "white",
                borderBottom: "1px solid #747474",
                padding: "0px 0px 10px 15px",
              }}
            >
              <Typography
                sx={{
                  fontSize: "20px",
                }}
              >
                Do I need a personal injury report?
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ backgroundColor: "#1e1e1e" }}>
              <Typography sx={{ color: "#747474" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "#e3b748" }} />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              sx={{
                backgroundColor: "#1e1e1e",
                color: "white",
                borderBottom: "1px solid #747474",
                padding: "10px 0px 10px 15px",
              }}
            >
              <Typography
                sx={{
                  fontSize: "20px",
                }}
              >
                How much is my case worth?
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ backgroundColor: "#1e1e1e" }}>
              <Typography sx={{ color: "#747474" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "#e3b748" }} />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              sx={{
                backgroundColor: "#1e1e1e",
                color: "white",
                borderBottom: "1px solid #747474",
                padding: "10px 0px 10px 15px",
              }}
            >
              <Typography
                sx={{
                  fontSize: "20px",
                }}
              >
                What should I do right after car accidect
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ backgroundColor: "#1e1e1e" }}>
              <Typography sx={{ color: "#747474" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "#e3b748" }} />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              sx={{
                backgroundColor: "#1e1e1e",
                color: "white",
                padding: "10px 0px 10px 15px",
              }}
            >
              <Typography
                sx={{
                  fontSize: "20px",
                }}
              >
                How much is my case worth?
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ backgroundColor: "#1e1e1e" }}>
              <Typography sx={{ color: "#747474" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Faq;
