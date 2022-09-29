import React from 'react'
import { NavBar } from '../NavBar'
import styles from './styles.module.css'

const AppLayout = ({ children }) => {
  return (
    <>
      <NavBar />
      <div className={styles.appContainer}>{children}</div>
    </>
  )
}

export default AppLayout
