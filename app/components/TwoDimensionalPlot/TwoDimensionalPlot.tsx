'use client'

import React from 'react'
import Axes from '../plotElements/Axes'
import styles from './TwoDimensionalPlot.module.css'





const TwoDimensionalPlot = () => {
  return (
    <div className={styles.plotMainContainer}>
      <Axes/>
    </div>
  )
}

export default TwoDimensionalPlot