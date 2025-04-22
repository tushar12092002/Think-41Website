import React from "react";
import styles from "./Boot41FlowFrame.module.css";
import Boot41Flow from "./Boot41Flow";
import Boot41Banner from "./Boot41Banner";

const Boot41FlowFrame = () => (
  <div className={styles.frameWrapper}>
    <Boot41Flow />
    <Boot41Banner />
  </div>
);

export default Boot41FlowFrame;
