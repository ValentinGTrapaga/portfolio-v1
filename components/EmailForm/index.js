import React from 'react'
import { HomeSection } from './../HomeSection/index'
import styles from './styles.module.css'
import { motion } from 'framer-motion'
import { AiOutlineArrowRight, AiTwotoneEnvironment } from 'react-icons/ai'

const arrowMotion = {
  hover: {
    rotate: 45,
    transition: {
      duration: 0.5,
      type: 'tween',
      ease: 'easeOut'
    }
  }
}

const buttonMotion = {
  hover: {
    scale: 1.2,
    transition: {
      duration: 0.5,
      type: 'tween',
      ease: 'easeOut'
    }
  }
}

export const EmailForm = () => {
  return (
    <HomeSection title='Contact'>
      <div className={styles.formDiv}>
        <p style={{ textAlign: 'justify' }}>
          Feel free to contact me for anything, whether it is a job opportunity,
          an idea or maybe you just want to chat.
        </p>
        <form className={styles.form}>
          <input
            className={styles.formInput}
            type='text'
            placeholder='Name'
            required></input>
          <input
            required
            className={styles.formInput}
            type='email'
            placeholder='E-mail'
            pattern='[a-z0-9]+@[a-z]+\.[a-z]{2,3}'></input>
          <textarea
            required
            className={styles.formTextarea}
            placeholder='Message'></textarea>
          <motion.button
            whileHover='hover'
            variants={buttonMotion}
            className={styles.formButton}>
            Send
            <motion.span variants={arrowMotion}>
              <AiOutlineArrowRight className={styles.formArrow} />
            </motion.span>
          </motion.button>
        </form>
      </div>
    </HomeSection>
  )
}
