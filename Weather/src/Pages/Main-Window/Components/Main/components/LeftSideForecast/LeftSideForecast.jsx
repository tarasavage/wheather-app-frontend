import React from 'react'
import styles from "./LeftSideForecast.module.scss";


function LeftSideForecast({venue}) {
  return (
    <div>
        <div>
          <h3>{venue}</h3>
        </div>
    </div>
  )
}

export default LeftSideForecast
