import React from 'react'
import { NavBar } from '../NavBar'
import styles from './styles.module.css'
import { AnalyticsWrapper } from './../analytics'

const AppLayout = ({ children }) => {
  return (
    <>
      {children}
      <AnalyticsWrapper />
    </>
  )
}

export default AppLayout
