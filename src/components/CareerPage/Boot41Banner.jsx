import React from "react";
import styles from "./Boot41Banner.module.css";
import Ellipse from "../../assets/Career/Ellipse.svg";
import Arrow from "../../assets/Career/solararrow.svg";
import BannerImg from "../../assets/Career/banner-illustration.png";

const Boot41Banner = () => (
  <div className={styles.bannerWrapper}>
    <div className={styles.bannerContent}>
      <img src={BannerImg} alt="Kickstart" className={styles.bannerImg} />
      <span className={styles.bannerText}>Kickstart Your AI Career.</span>
    </div>
    <button className={styles.applyBtn}>
      <span className={styles.iconWrap}>
        <img src={Ellipse} alt="ellipse" className={styles.ellipseIcon} />
        <img src={Arrow} alt="arrow" className={styles.arrowIcon} />
      </span>
      <span className={styles.btnText}>Apply Now</span>
    </button>
  </div>
);

export default Boot41Banner;
