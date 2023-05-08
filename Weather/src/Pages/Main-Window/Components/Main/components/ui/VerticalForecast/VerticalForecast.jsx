import React from 'react'
import styles from 'VerticalForecast.module.scss'

function VerticalForecast({time, img}) {
  return (
    <div className={styles.card}>
          <p>{time}</p>
          <img src={img} alt="weather-img" />
    </div>
  )
}

export default VerticalForecast
