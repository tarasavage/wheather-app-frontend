import React, { useEffect } from "react";
import styles from "./MainContent.module.scss";

import CurrentForecast from "./components/CurrentForecast/CurrentForecast";
import InfoBlock from "../../ui/InfoBlock/InfoBlock";

import visibility from "../../icons/visibility.svg";
import wind from "../../icons/wind.svg";
import rain from "../../icons/rain.svg";
import wet from "../../icons/wet.svg";
import pressure from "../../icons/pressure.svg";

import sunrise from "../../icons/sunrise.svg";
import sunset from "../../icons/sunset.svg";
import { convertTime } from "../../Helpers/time.helper";

const data = {
  id: 1,
  city: {
    id: 1,
    name: "Львів",
    lat: 40.7128,
    lon: -74.006,
    country: "US",
  },
"dt": "2023-05-22 09:00:00",
"pressure": 1019.0,
"humidity": 38.0,
"clouds": 9.0,
"wind_speed": 4.79,
"wind_gust": 8.45,
"wind_deg": 38.0,
"weather_id": 800,
"weather_main": "Clear",
"weather-description": "4CTe He60",
"weather icon": "01d",
"Sunrise": "2023-05-22T02:01:55z",
"sunset": "2023-05-22T17:47:26Z",
"temp_min": 9.61,
"temp_max": 19.93,
"temp_morn": 9.92,
"temp_day": 19.33,
"temp_eve": 18.39,
"temp_night": 15.53,
"feels_like_morn": 8.45,
"feels_like_day": 18.31,
"feels_like_eve": 17.51,
"feels_like_night": 14.76,
"visibility": 3000,
"pop": 0.0,
"rain" : null,
"snow": null,
"city": 2
};


function MainContent() {

  const [response, setResponse] = useState([]);

  useEffect(() => {

    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => setResponse(json))

  }, )
  return (
    <div className={styles.main_content__wrapper}>
      <CurrentForecast />

      <div className={styles.blockinfo__wrapper}>
        <div className={styles.blocks__wrapper}>
          <div className={styles.textblock}>
            Увесь день у Львові спостерігалося ясне небо, й хмари не засмутили
            його своєю присутністю до самого вечора. Без опадів.Увесь день у
            Львові спостерігалося ясне небо, й хмари не засмутили його своєю
            присутністю до самого вечора. Без опадів.
          </div>
          <div className={styles.infoblock__wrapper}>
            <InfoBlock title={"Вітер"} data={`${data.wind_speed} м/с`} icon={wind} />
            <InfoBlock title={"Опади"} data={`${data.city} мм`} icon={rain} />
            <InfoBlock title={"Видимість"} data={`${data.visibility} м`} icon={visibility} />
            <InfoBlock title={"Вологість"} data={`${data.humidity} %`} icon={wet} />
          </div>
        </div>
        <div className={styles.sideBlocks_wrapper}>
          <div className={styles.sun_infoblock}>
            <div>
              <div className={styles.title_wrap}>
                <img src={sunrise} alt="sunrise" />
                <p>Схід Сонця</p>
              </div>
              <div className={styles.sun_content_wrap}>
                <p>{convertTime(data.Sunrise)}</p>
              </div>
            </div>
            <div>
              <div className={styles.title_wrap} style={{borderTop: "2px solid #FFFFFF"}}>
                <img src={sunset} alt="sunset" />
                <p>Захід Сонця</p>
              </div>
              <div className={styles.sun_content_wrap}>
                <p>{convertTime(data.sunset)}</p>
              </div>
            </div>
          </div>
          <div className={styles.block_info}>
            <div className={styles.title_wrap}>
              <img src={pressure} alt="pressure" />
              <p>Тиск</p>
            </div>
            <div className={styles.content_wrap}>
              <p>{data.pressure} гПа</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainContent;
