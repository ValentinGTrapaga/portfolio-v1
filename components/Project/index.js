import Image from 'next/image'
import React from 'react'
import styles from './styles.module.css'

const Project = ({ project }) => {
  const stack = project.stack.map((tech, index) => (
    <span
      key={index}
      className={styles.stackSpan}>
      {tech.toUpperCase()}
    </span>
  ))

  return (
    <div className={styles.projectCard}>
      <div className={styles.projectImg}>
        <Image
          src={project.imageUrl}
          alt={project.title}
          width={280}
          height={280}
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
        <div className={styles.stackDiv}>{stack}</div>
      </div>
    </div>
  )
}

export default Project
