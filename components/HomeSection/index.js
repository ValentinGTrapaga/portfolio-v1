import React from 'react'
import styles from './styles.module.css'

export const HomeSection = ({ children, title }) => {
  return (
    <section className={styles.sectionDiv}>
      {title && <h1 className={styles.sectionTitle}>{title}</h1>}
      {children}
    </section>
  )
}
