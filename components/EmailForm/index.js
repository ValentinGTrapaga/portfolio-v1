import React, { useState } from 'react'
import { HomeSection } from './../HomeSection/index'
import styles from './styles.module.css'
import { motion } from 'framer-motion'
import { AiOutlineArrowRight, AiTwotoneEnvironment } from 'react-icons/ai'
import { arrowMotion, buttonMotion } from './animationsVariants'

export const EmailForm = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    message: ''
  })

  function handleFormChange(event) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value
      }
    })
  }

  async function handleSubmit(event, formData) {
    event.preventDefault()
    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(formData)
      })
      setFormData({
        fullname: '',
        email: '',
        message: ''
      })
      alert('Email sent succesfully')
    } catch (error) {
      alert('Email not sent')
    }
  }

  return (
    <HomeSection title='Contact'>
      <div className={styles.formDiv}>
        <p style={{ textAlign: 'justify' }}>{process.env.EMAIL_API_KEY}</p>
        <form
          className={styles.form}
          onSubmit={handleSubmit}>
          <input
            className={styles.formInput}
            onChange={handleFormChange}
            type='text'
            placeholder='Name'
            id='fullname'
            value={formData.fullname}
            required></input>
          <input
            required
            onChange={handleFormChange}
            className={styles.formInput}
            type='email'
            id='email'
            value={formData.email}
            placeholder='Email'
            pattern='[a-z0-9]+@[a-z]+\.[a-z]{2,3}'></input>
          <textarea
            required
            name='message'
            id='message'
            onChange={handleFormChange}
            value={formData.message}
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
