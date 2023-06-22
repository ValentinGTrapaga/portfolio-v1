import React from 'react'
import Image from 'next/image'
import DevHome from '../../assets/dev-home.svg'
import styles from './styles.module.css'
import { motion } from 'framer-motion'
import HeroTitle from './../HeroTitle/index';

export default function Main () {
  return (
    <motion.div
      className={styles.mainDiv}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.8 }}>
      <div className={styles.heroDiv}>
        <h1 className={styles.heroTitle}>
          Hello 🙋🏻‍♂️
          <br></br>I am
          <span className={styles.heroName}> Valentin Gonzalez Trapaga</span>,
        </h1>
        <h1 className={styles.heroTitle}>a         <HeroTitle stringsToType={['Fullstack', 'Frontend', 'Backend', 'React', 'NextJS']} />
          Developer.</h1>
      </div>
    </motion.div>
  )
}
