import React from 'react'
import { HomeSection } from '../HomeSection'
import { projects } from '../../data/projects'
import Project from '../Project'
import styles from './styles.module.css'

const projectsComp = projects.map((project, index) => (
  <Project
    project={project}
    key={index}
  />
))

const Projects = () => {
  return (
    <HomeSection title={'Projects'}>
      <div className={styles.projectsDiv}>{projectsComp}</div>
    </HomeSection>
  )
}

export default Projects
