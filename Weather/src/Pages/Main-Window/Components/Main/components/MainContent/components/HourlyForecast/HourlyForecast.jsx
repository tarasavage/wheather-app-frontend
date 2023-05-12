import React from 'react'
import styles from './HourlyForecast.module.scss'

function HourlyForecast({time, icon}) {
  return (
    <div className={styles.hourly_wrapper}>
          <p className={styles.time_title}>{time}</p>
          <img src={icon} alt="" />
    </div>
  )
}

export default HourlyForecast
