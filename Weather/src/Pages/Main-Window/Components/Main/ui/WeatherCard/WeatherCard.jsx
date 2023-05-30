import React from "react";
import styles from "./WeatherCard.module.scss";

const WeatherCard = ({ day, icon, temp, active }) => {
  console.log(active)
  return (
    <div className={`${styles.weathercard_wrapper} ${active ? styles.active : ""}`}>
      <div className={styles.weathercard_day}>
        <p>{day}</p>
      </div>
      <div className={styles.weathercard_content}>
        <img src={icon} alt="weather-icon" />
        <p>+{temp}</p>
      </div>
    </div>
  );
};

export default WeatherCard;
