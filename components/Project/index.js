import Image from 'next/image'
import React from 'react'
import styles from './styles.module.css'
import { BsLink45Deg, BsGithub } from 'react-icons/bs'
import { motion } from 'framer-motion'

const Project = ({ project }) => {
  const stack = project.stack.map((tech, index) => (
    <span
      key={index}
      className={styles.stackSpan}>
      {tech.toUpperCase()}
    </span>
  ))

  return (
    <motion.div
      className={styles.projectCard}
      whileHover={{ scale: 1.05, transition: { duration: 0.25 } }}>
      <div className={styles.projectImgDiv}>
        <Image
          className={styles.projectImg}
          src={project.imageURL}
          alt={project.title}
          layout='responsive'
        />
      </div>
      <div className={styles.projectData}>
        <div>
          <h3 className={styles.projectTitle}>{project.title}</h3>
          <div>
            <h4 className={styles.projectSummary}>Summary</h4>
            <p className={styles.projectDescription}>{project.summary}</p>
          </div>
        </div>
        <div className={styles.linksDiv}>
          <a
            className={styles.projectLink}
            href={project.link}>
            <BsLink45Deg />
            View live
          </a>
          <a
            className={styles.projectLink}
            href={project.github}>
            <BsGithub /> View code
          </a>
        </div>
        <div className={styles.stackDiv}>{stack}</div>
      </div>
    </motion.div>
  )
}

export default Project
