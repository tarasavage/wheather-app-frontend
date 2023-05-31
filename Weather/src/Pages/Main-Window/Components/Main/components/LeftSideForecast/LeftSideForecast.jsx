import React, { useState, useEffect, useContext } from "react";
import styles from "./LeftSideForecast.module.scss";

import calendar from "../../../../../../icons/calendar.svg";
import star from "../../../../../../icons/choosen_star.png";

import WeatherCard from "../../ui/WeatherCard/WeatherCard";
import { translateDay } from "../../Helpers/leftForecast.helper";
import { WeatherContext } from "../../../../../../context";
import { icons } from "../../../../../../../public/svg/icons";
import { fetchData } from "../../Helpers/fetchingData.helper";

import { getDayFromDate } from "../../../../../../features/getDay";
import { useParams } from "react-router-dom";

function LeftSideForecast() {
  const { city = "Львів" } = useParams();
  console.log(city);

  // const { dailyForecast, currentForecast } = useContext(WeatherContext);
  const [currentData, setCurrentData] = useState({});
  const [dailyData, setDailyData] = useState([]);

  useEffect( () => {
    fetchData('current', city).then(data => setCurrentData(data))
    fetchData('daily', city).then(data => setDailyData(data))
  }, [city]);

  const weatherData = [];
  console.log(dailyData)

  dailyData?.map((day) =>
    weatherData.push({
      id: day?.id,
      temperture: day?.temp_day,
      day: translateDay(getDayFromDate(day?.dt)),
      icon: icons.find((icon) => icon?.name == day?.weather_icon)?.url,
    })
  );

  return (
    <div className={styles.leftside_wrapper}>
      <div className={styles.choosen_wrapper}>
        {/* <img src={star} alt="star" /> 
         <p>У вибраному</p> */}
        <button className={styles.select}>Додати місто у Вибране</button>
       
      </div>
      <div className={styles.top_title_block}>
        <h3 className={styles.top_title}>{city}</h3>
        <div className={styles.current_weather_block}>
          <img
            src={
              icons.find((icon) => icon?.name == currentData?.weather_icon)
                ?.url
            }
            alt="weather"
          />
          <p>{`зараз ${currentData?.dt?.slice(11, 16)}`}</p>
        </div>
      </div>

      <div className={styles.wrapper}>
        <div className={styles.title_wrap}>
          <p>{`${currentData?.temp}°C`}</p>
        </div>
        <div className={styles.content_wrap}>
          <p>Відчувається як {currentData?.feels_like}°C</p>
          <p>{currentData?.rain_1h ? "Можливі опади" : "Без опадів"}</p>
          <p>{currentData?.snow_1h ? "Можливий сніг" : "Без снігу"}</p>
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
