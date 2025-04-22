import React from "react";
import styles from "./Boot41Flow.module.css";

import Polygon from "../../assets/Career/Polygon 28 (1).svg";
import EllipsePenta from "../../assets/Career/Ellipse-penta .png";
import Vector from "../../assets/Career/Vector 2812.svg";
import IconFlag from "../../assets/Career/material-symbols_flag (1).svg";
import IconLink from "../../assets/Career/ic_round-link (1).svg";
import IconBackground from "../../assets/Career/career-background.svg";

const Boot41Flow = () => (
  <section className={styles.flowSection}>
    <div className={styles.flowSvgWrapper}>
      {/* Light line */}
      <svg width="1107" height="172" viewBox="0 0 1107 172" fill="none" className={styles.lightLine}>
        <path opacity="0.5" d="M1 133.524C53.8573 169.871 203.592 211.125 379.671 85.3645C555.751 -40.3961 632.75 -8.64742 767.847 70.8425C853.838 121.439 1014.96 151.261 1106 44.0198" stroke="#F1F1F1" strokeWidth="2" />
      </svg>
      {/* Main blue line */}
      <svg width="1107" height="172" viewBox="0 0 1107 172" fill="none" className={styles.blueLine}>
        <path d="M1 133.524C53.8573 169.871 203.592 211.125 379.671 85.3645C555.751 -40.3961 632.75 -8.64742 767.847 70.8425C853.838 121.439 1014.96 151.261 1106 44.0198" stroke="#23619A" strokeWidth="2" strokeLinecap="round" />
      </svg>

      {/* Arrow on the curve */}
      <img src={Polygon} alt="arrow" className={styles.arrow} />

      {/* Icons on the curve */}
      <span className={`${styles.iconWrapper}`} style={{ left: "120px", top: "140px" }}>
        <img src={EllipsePenta} alt="ellipse" />
        <img src={Vector} alt="vector" />
        <img src={IconFlag} alt="flag" className={styles.innerIcon} />
      </span>
      <span className={`${styles.iconWrapper}`} style={{ left: "520px", top: "60px" }}>
        <img src={EllipsePenta} alt="ellipse" />
        <img src={Vector} alt="vector" />
        <img src={IconBackground} alt="background" className={styles.innerIcon} />
      </span>
      <span className={`${styles.iconWrapper}`} style={{ left: "950px", top: "120px" }}>
        <img src={EllipsePenta} alt="ellipse" />
        <img src={Vector} alt="vector" />
        <img src={IconLink} alt="link" className={styles.innerIcon} />
      </span>
    </div>

    <div className={styles.flowContainer}>
      <span className={styles.numberOne}>1</span>
      <span className={styles.numberTwo}>2</span>
      <span className={styles.numberThree}>3</span>

      <div className={styles.headingBlock} style={{ left: 0, top: 38 }}>
        <div className={styles.flowHeading}>Foundation Track</div>
        <div className={styles.flowContent}>
          Covers core technical skills in Java, Python, and React. Includes structured assessments and personalized learning paths to strengthen problem-solving, logic, and code quality.
        </div>
      </div>
      <div className={styles.headingBlock} style={{ left: 356, top: 302 }}>
        <div className={styles.flowHeading}>GenAI Mini-App Sprint</div>
        <div className={styles.flowContent}>
          Participants build functional mini applications using Generative AI tools and frameworks. Each sprint spans one week—focused on solving specific real-world problems through individual projects.
        </div>
      </div>
      <div className={styles.headingBlock} style={{ right: 0, top: 38, textAlign: "right" }}>
        <div className={styles.flowHeading}>Collaborative Project Phase</div>
        <div className={styles.flowContent}>
          Final teams are formed to work on larger AI-driven solutions. This phase emphasizes collaboration, architecture design, and delivery ownership—mirroring real engineering team dynamics.
        </div>
      </div>
    </div>
  </section>
);

export default Boot41Flow;
