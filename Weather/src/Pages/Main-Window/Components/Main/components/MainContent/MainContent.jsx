import React from "react";
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
function MainContent() {
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
            <InfoBlock title={"Вітер"} icon={wind} />
            <InfoBlock title={"Опади"} data={""} icon={rain} />
            <InfoBlock title={"Видимість"} icon={visibility} />
            <InfoBlock title={"Вологість"} data={""} icon={wet} />
          </div>
        </div>
        <div className={styles.sideBlocks_wrapper}>
          <div className={styles.sun_infoblock}>
            <div>
              <div className={styles.title_wrap}>
                <img src={sunrise} alt="sunrise" />
                <p>Схід Сонця</p>
              </div>
              <div className={styles.sun_content_wrap}></div>
            </div>
            <div>
              <div className={styles.title_wrap} style={{borderTop: "2px solid #FFFFFF"}}>
                <img src={sunset} alt="sunset" />
                <p>Захід Сонця</p>
              </div>
              <div className={styles.sun_content_wrap}></div>
            </div>
          </div>
          <div className={styles.block_info}>
            <div className={styles.title_wrap}>
              <img src={pressure} alt="pressure" />
              <p>Тиск</p>
            </div>
            <div className={styles.content_wrap}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainContent;
