import LocationSVG from "/public/svg/location.svg";


import styles from "./styles.module.scss";
import { WeatherContext } from "../../context";
import { icons } from "../../../public/svg/icons";
import { useContext } from "react";

const LocationWidgetComponent = (
 {data}
) => {
  const {currentForecast} = useContext(WeatherContext);
  const icon = icons.find((icon)=> (icon?.name == currentForecast?.weather_icon))?.url;
  console.log(icon)
  return (
    <div className={styles.location_widget}>
      <div className={styles.header}>
        <img src={LocationSVG} />
        <div className={styles.label}>{data.location}</div>
        <img src={icon} />
      </div> 

      <div className={styles.short_weather}>
        <div>
          <span>Температура: </span>
          <span>{data.temperature}</span>
        </div>

        <div>
          <span>Відчувається як:</span> <span>{data.feltTemperature}</span>
        </div>

        <div>
          <span>Опади:</span> <span>{data.precipitation}</span>
        </div>
      </div>

      <div className={styles.weather_text}>{data.weatherText}</div>
    </div>
  );
};

export { LocationWidgetComponent };
