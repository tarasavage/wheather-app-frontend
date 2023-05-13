import React, { useState, useEffect } from "react";
import styles from "./LeftSideForecast.module.scss";

import currentweather from "../../../../../../icons/cloudyWithSun.svg";
import calendar from '../../../../../../icons/calendar.svg'

import WeatherCard from '../../ui/WeatherCard/WeatherCard'

const data = {
  id: 1,
  city: {
    id: 1,
    name: "Львів",
    lat: 40.7128,
    lon: -74.006,
    country: "US",
  },
  dt: "2023-05-08T12:00:00Z",
  pressure: 1013.25,
  humidity: 70.0,
  clouds: 40.0,
  wind_speed: 5.0,
  wind_gust: null,
  wind_deg: 180.0,
  weather_id: 500,
  weather_main: "Rain",
  weather_description: "light rain",
  weather_icon: currentweather,
  temp: 15.5,
  feels_like: 14.2,
  visibility: 3000.0,
  rain_1h: null,
  snow_1h: null,
};

function LeftSideForecast() {
  const [currentTime, setCurrentTime] = useState(getCurrentTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(getCurrentTime());
    }, 30000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  function getCurrentTime() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();

    return `${hours}:${minutes < 10 ? "0" + minutes : minutes}`;
  }

  return (
    <div className={styles.leftside_wrapper}>
      <div>
        <img src="" alt="" />
      </div>
      <div className={styles.top_title_block}>
        <h3 className={styles.top_title}>{data.city.name}</h3>
        <div className={styles.current_weather_block}>
          <img src={data.weather_icon} alt="weacther" />
          <p>{`зараз ${currentTime}`}</p>
        </div>
      </div>

      <div className={styles.wrapper}>
        <div className={styles.title_wrap}>
          <p>{data.temp}</p>
        </div>
        <div className={styles.content_wrap}></div>
      </div>

      <div className={styles.ten_days_forecast}>
        <div className={styles.ten_top_block}>
          <img src={calendar} alt="calendar" />
          <p>10-денний прогноз</p>
        </div>
        <div className={styles.ten_main_block}>
        {Array.from({ length: 10 }, (_, index) => (
        <WeatherCard key={index} />
      ))}
          </div>
      </div>
    </div>
  );
}

export default LeftSideForecast;
