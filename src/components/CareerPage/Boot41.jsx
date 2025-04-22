import React from "react";
import styles from "./Boot41.module.css";
import FoundationIcon from "../../assets/Career/foundation.svg";
import boot41Img from "../../assets/Career/Boot41-Image.png";
import videoBoot41 from "../../assets/Career/videoBoot41.png";

const Boot41 = () => {
  return (
    <section className={styles.boot41Section} id="boot41">
      <div className={styles.headerRow}>
        {/* Graduate Program Tag using the Foundation SVG */}
        <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px", position: "relative", zIndex: 2 }}>
          <img src={FoundationIcon} alt="Graduate Program" style={{ width: 16, height: 16 }} />
          <span style={{ color: "#1F2937", fontWeight: 500, fontSize: 14 }}>Graduate Program</span>
        </div>
        <h2 className={styles.heading}>
          Boot41: Launch <span className={styles.gradientText}>Your Career into the Future of AI</span>
        </h2>
        <div className={styles.description}>
          Boot41 is our exclusive bootcamp designed to equip engineers and developers with hands-on experience, mentorship, and AI-driven workflows to fast-track their careers
        </div>
      </div>

      <div className={styles.mediaRow} style={{ gap: "26px", marginTop: "36px" }}>
        <div className={styles.mediaImgContainer}>
          <img src={boot41Img} alt="Bootcamp" className={styles.mediaImg} />
        </div>
        <div className={styles.mediaImgContainer}>
          <img src={videoBoot41} alt="Boot41 Video" className={styles.mediaImg} />
          <div className={styles.videoOverlay}>
            <div className={styles.playButton} />
            <div className={styles.videoText}>
              <span className={styles.videoTitle}>Boot41</span>
              <span className={styles.videoSubtitle}>A fresh graduate program</span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.statsRow} style={{ marginTop: "36px" }}>
        <div className={styles.statBlockNoBox}>
          <span className={styles.statValue}>75%</span>
          <span className={styles.statLabel}>conversion rate to full-time offers</span>
        </div>
        <div className={styles.statBlockNoBox}>
          <span className={styles.statValue}>50+</span>
          <span className={styles.statLabel}>engineers trained across two cohorts</span>
        </div>
        <div className={styles.statBlockNoBox}>
          <span className={styles.statValue}>30+</span>
          <span className={styles.statLabel}>GenAI mini apps built — 1 already in production</span>
        </div>
      </div>
    </section>
  );
};

export default Boot41;