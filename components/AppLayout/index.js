import React from 'react'
import { NavBar } from '../NavBar'
import styles from './styles.module.css'
import { AnalyticsWrapper } from './../analytics'

const AppLayout = ({ children }) => {
  return (
    <>
      <NavBar />
      <div className={styles.stars}></div>
      <div className={styles.twinkling}></div>
      <div className={styles.appContainer}>
        {children}
        <AnalyticsWrapper />
      </div>
    </>
  )
}

export default AppLayout
