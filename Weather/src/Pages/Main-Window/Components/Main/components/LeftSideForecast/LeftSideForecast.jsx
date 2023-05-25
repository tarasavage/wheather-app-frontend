import React, { useState, useEffect, useContext } from "react";
import styles from "./LeftSideForecast.module.scss";
import { format } from "date-fns";
import axios from 'axios'

import currentweather from "../../../../../../icons/cloudyWithSun.svg";
import calendar from "../../../../../../icons/calendar.svg";
import star from "../../../../../../icons/choosen_star.png";

import WeatherCard from "../../ui/WeatherCard/WeatherCard";
import { translateDay } from "../../Helpers/leftForecast.helper";
import { WeatherContext } from "../../../../../../context";
import { icons } from "../../../../../../../public/svg/icons";
import { convertTime } from "../../Helpers/time.helper";
import { fetchData } from "../../Helpers/fetchingData.helper";

import { getDayFromDate } from "../../../../../../features/getDay";
import { useParams } from "react-router-dom";

import { base_url } from "../../../../../../weather-service/useWeatherFetch";

function LeftSideForecast() {
  const { city = "Львів" } = useParams();
  console.log(city);

  const { dailyForecast, currentForecast } = useContext(WeatherContext);
  const [currentData, setCurrentData] = useState({});

  const weatherData = [];

  useEffect(async () => {
    const fetchData = async (interval, city) => {
      try {
        const response = await axios.get(
          `${base_url}/api/forecast/${interval}/${city}/`
        );
        console.log(response);
        return response;
      } catch (e) {
        console.error(e);
      }
    };
    fetchData('current', city)
  }, []);

  if (currentData) console.log(currentData);

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
        <h3 className={styles.top_title}>{"CITY"}</h3>
        <div className={styles.current_weather_block}>
          <img
            src={
              icons.find((icon) => icon?.name == currentForecast?.weather_icon)
                ?.url
            }
            alt="weather"
          />
          <p>{`зараз ${currentForecast?.dt?.slice(11, 16)}`}</p>
        </div>
      </div>

      <div className={styles.wrapper}>
        <div className={styles.title_wrap}>
          <p>{`${currentForecast?.temp}°C`}</p>
        </div>
        <div className={styles.content_wrap}>
          <p>Відчувається як {currentForecast?.feels_like}°C</p>
          <p>{currentForecast?.rain_1h ? "Можливі опади" : "Без опадів"}</p>
          <p>{currentForecast?.snow_1h ? "Можливий сніг" : "Без снігу"}</p>
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
              temp={Math.round(card?.temperture) + "°C"}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default LeftSideForecast;
