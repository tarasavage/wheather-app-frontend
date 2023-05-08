import React from 'react'
import styles from './MainContent.module.scss'

import CurrentForecast from './components/CurrentForecast/CurrentForecast'
function MainContent() {
  return (
    <div>
          <CurrentForecast />
    </div>
  )
}

export default MainContent
