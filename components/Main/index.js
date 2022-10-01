import React from 'react'
import Image from 'next/image'
import DevHome from '../../assets/dev-home.svg'
import HeroTitle from '../../components/HeroTitle'
import styles from './styles.module.css'
import { motion } from 'framer-motion'

export default function Main() {
  return (
    <motion.div
      className={styles.mainDiv}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2, duration: 1 }}>
      <div className={styles.heroDiv}>
        <h1 className={styles.heroTitle}>
          Hello 🙋🏻‍♂️
          <br></br>
          I'm
          <span className={styles.heroName}> Valentin Gonzalez Trapaga</span>
        </h1>
        <h1 className={styles.heroTitle}>
          <HeroTitle
            stringsToType={['React Developer.', 'Frontend developer.']}
          />
        </h1>
      </div>
      <div>
        <Image
          src={DevHome}
          alt='Developer coding image'
          height={400}
          className={styles.heroImage}
        />
      </div>
    </motion.div>
  )
}
