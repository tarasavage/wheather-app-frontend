import React, { useState, useEffect, useContext } from "react";
import styles from "./LeftSideForecast.module.scss";
import { format } from "date-fns";

import currentweather from "../../../../../../icons/cloudyWithSun.svg";
import calendar from "../../../../../../icons/calendar.svg";
import star from "../../../../../../icons/choosen_star.png";

import WeatherCard from "../../ui/WeatherCard/WeatherCard";
import { translateDay } from "../../Helpers/leftForecast.helper";
import { WeatherContext } from "../../../../../../context";
import { icons } from "../../../../../../../public/svg/icons";

import { getDayFromDate } from "../../../../../../features/getDay";

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

  const { dailyForecast } = useContext(WeatherContext);

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

  const weatherData = [];


  dailyForecast?.map((day) =>
    weatherData.push({
      id: day?.id,
      temperture: day?.temp_day,
      day: getDayFromDate(day?.dt),
      icon: icons.find((icon) => icon?.name == day?.weather_icon)?.url,
    })
  );




  return (
    <div className={styles.leftside_wrapper}>
      <div className={styles.choosen_wrapper}>
        <img src={star} alt="star" />
        <p>У вибраному</p>
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
        <div className={styles.content_wrap}>
          <p>Відчувається як {data.temp + 1}</p>
          <p>Без опадів</p>
        </div>
      </div>

      <div className={styles.ten_days_forecast}>
        <div className={styles.ten_top_block}>
          <img src={calendar} alt="calendar" />
          <p>7-денний прогноз</p>
        </div>
        <div className={styles.ten_main_block}>
          {weatherData.map((card) => (
            <WeatherCard
              key={card?.id}
              day={card?.day}
              icon={card?.icon}
              temp={Math.round(card?.temperture)+'°C'}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default LeftSideForecast;
