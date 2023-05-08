import React from 'react'
import styles from './CurrentForecast.module.scss'

import clock from '../../../../icons/clock.svg'

function CurrentForecast() {
  return (
    <div className={styles.wrapper}>
          <div className={styles.title_wrap}>
               <img src={clock} alt="clock" />
               <p>Погодинний прогноз погоди на день</p>
          </div>
          <div>

          </div>
    </div>
  )
}

export default CurrentForecast
