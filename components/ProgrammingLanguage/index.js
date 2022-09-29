import React from 'react'
import styles from './styles.module.css'

const ProgrammingLanguage = ({ children }) => {
  return <span className={styles.programmingLanguage}>{children}</span>
}

export default ProgrammingLanguage
