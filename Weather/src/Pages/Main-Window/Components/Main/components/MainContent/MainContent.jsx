import React, { useContext, useEffect, useState } from "react";
import styles from "./MainContent.module.scss";
import { useParams } from "react-router-dom";

import CurrentForecast from "./components/CurrentForecast/CurrentForecast";
import InfoBlock from "../../ui/InfoBlock/InfoBlock";

import visibility from "../../icons/visibility.svg";
import wind from "../../icons/wind.svg";
import rain from "../../icons/rain.svg";
import wet from "../../icons/wet.svg";
import pressure from "../../icons/pressure.svg";
import pressureIcon from '../../icons/pressure.png'

import sunrise from "../../icons/sunrise.svg";
import sunset from "../../icons/sunset.svg";

import { WeatherContext } from "../../../../../../context";
import { convertTime } from "../../Helpers/time.helper";
import { fetchData } from "../../Helpers/fetchingData.helper";

function MainContent() {
  const { city = "Львів" } = useParams();

  const {currentForecast, dailyForecast} = useContext(WeatherContext);

  if(currentForecast) console.log(currentForecast);
  if(dailyForecast) console.log(dailyForecast);


  const [currentData, setCurrentData] = useState({});
  const [dailyData, setDailyData] = useState([]);

  useEffect(() => {
    fetchData('current', city).then(data => setCurrentData(data));
    fetchData('daily', city).then(data => setDailyData(data));
  }, [city])


  if(currentData) console.log(currentData);
  if(dailyData) console.log(dailyData);


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

          <InfoBlock title={"Вітер"} data={`${dailyData ? dailyData[0]?.wind_speed : ''} м/с`} icon={wind} />
            <InfoBlock title={"Опади"} data={`${dailyData ? dailyData[0]?.city : ''} мм`} icon={rain} />
            <InfoBlock title={"Видимість"} data={`${currentData?.visibility} м`} icon={visibility} />
            <InfoBlock title={"Вологість"} data={`${dailyData ? dailyData[0]?.humidity : ''} %`} icon={wet} />

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
                <p>{dailyData[0]?.sunrise?.slice(11, 16)}</p>
              </div>
            </div>
            <div>
              <div className={styles.title_wrap} style={{borderTop: "2px solid #FFFFFF"}}>
                <img src={sunset} alt="sunset" />
                <p>Захід Сонця</p>
              </div>
              <div className={styles.sun_content_wrap}>
              <p>{dailyData[0]?.sunset?.slice(11, 16)}</p>
              </div>
            </div>
          </div>
          <div className={styles.block_info}>
            <div className={styles.title_wrap}>
              <img src={pressure} alt="pressure" />
              <p>Тиск</p>
            </div>
            <div className={styles.content_wrap}>
              <p>{`${dailyForecast ? dailyForecast[0].pressure : ''} гПа`}</p>
              <div className={styles.wrap_img}><img src={pressureIcon} alt="pressure" /></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainContent;
