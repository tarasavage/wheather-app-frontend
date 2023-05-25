import React from "react";
import styles from "./InfoBlock.module.scss";

function InfoBlock({ title, icon, data }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title_wrap}>
        <img src={icon} alt="icon" />
        <p>{title}</p>
      </div>
      <div className={styles.content_wrap}>
        <p>{data}</p>
        </div>
    </div>
  );
}

export default InfoBlock;
