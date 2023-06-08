import React, { useContext, useEffect, useState } from "react";
import styles from "./CurrentForecast.module.scss";

import HourlyForecast from "../HourlyForecast/HourlyForecast";

import clock from "../../../../icons/clock.svg";

// weather icons:
import cloudy from "../../../../../../../../icons/cloudy.svg";
import { WeatherContext } from "../../../../../../../../context";
import { icons } from "../../../../../../../../../public/svg/icons";
import { useParams } from "react-router-dom";
import { fetchData } from "../../../../Helpers/fetchingData.helper";

function CurrentForecast() {
  const {city} = useParams();

  // const { hourlyForecast } = useContext(WeatherContext);
  const [hourlyForecast, setHourlyForecast] = useState([]);

  useEffect(() => {
    fetchData('hourly', city).then(data => setHourlyForecast(data));
  }, [city])

  return (
    <div className={styles.wrapper}>
      <div className={styles.title_wrap}>
        <img src={clock} alt="clock" />
        <p>Погодинний прогноз погоди на день</p>
      </div>
      <div className={styles.hourblock_wrapper}>
        {hourlyForecast?.map((data) => (
          <HourlyForecast
            time={data?.dt?.slice(11, 16)}
            icon={icons.find((icon) => icon?.name == data?.weather_icon)?.url}
          ></HourlyForecast>
        ))}
      </div>
    </div>
  );
}

export default CurrentForecast;
