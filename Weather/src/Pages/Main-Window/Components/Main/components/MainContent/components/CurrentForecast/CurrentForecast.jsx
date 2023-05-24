import React from 'react'
import styles from './CurrentForecast.module.scss'

import HourlyForecast from '../HourlyForecast/HourlyForecast'

import clock from '../../../../icons/clock.svg'

// weather icons:
import cloudy from '../../../../../../../../icons/cloudy.svg'
import { useWeatherFetch } from '../../../../../../../../weather-service'


function CurrentForecast() {

  const {currentForecast} = useWeatherFetch();
  console.log(currentForecast,'666666666666')
  return (
    <div className={styles.wrapper}>
          <div className={styles.title_wrap}>
               <img src={clock} alt="clock" />
               <p>Погодинний прогноз погоди на день</p>
          </div>
          <div className={styles.hourblock_wrapper}>
            <HourlyForecast time='20:00' icon={cloudy}></HourlyForecast>
            <HourlyForecast time='20:00' icon={cloudy}></HourlyForecast>
            <HourlyForecast time='20:00' icon={cloudy}></HourlyForecast>
            <HourlyForecast time='20:00' icon={cloudy}></HourlyForecast>
            <HourlyForecast time='20:00' icon={cloudy}></HourlyForecast>
            <HourlyForecast time='20:00' icon={cloudy}></HourlyForecast>
            <HourlyForecast time='20:00' icon={cloudy}></HourlyForecast>
            <HourlyForecast time='20:00' icon={cloudy}></HourlyForecast>
          </div>
    </div>
  )
}

export default CurrentForecast
