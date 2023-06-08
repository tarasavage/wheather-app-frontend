import React from 'react'
import styles from './Main.module.scss'
import LeftSideForecast from './components/LeftSideForecast/LeftSideForecast'
import MainContent from './components/MainContent/MainContent'

function Main() {
  return (
    <div className={styles.wrapper}>
      <LeftSideForecast venue={'Львів'}/>
      <MainContent />
    </div>
  )
}

export default Main
