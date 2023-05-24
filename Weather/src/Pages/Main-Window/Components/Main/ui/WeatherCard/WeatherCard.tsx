import React from "react";
import styles from "./WeatherCard.module.scss";

const WeatherCard = ({ day, icon, temp }) => {
  return (
    <div className={styles.weathercard_wrapper}>
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
