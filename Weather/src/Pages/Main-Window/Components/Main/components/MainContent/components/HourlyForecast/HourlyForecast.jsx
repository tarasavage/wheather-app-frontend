import React from "react";
import styles from "./HourlyForecast.module.scss";

function HourlyForecast({ time, icon }) {
  return (
    <div className={styles.hourly_wrapper}>
      <p className={styles.time_title}>{time}</p>
      <div className={styles.weather__img}>
        <img src={icon} alt="wheater-icon" />
      </div>
    </div>
  );
}

export default HourlyForecast;
