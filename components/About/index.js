import React from 'react'
import { HomeSection } from '../HomeSection'
import ProgrammingLanguage from './../ProgrammingLanguage/index'
import styles from './styles.module.css'

const About = () => {
  return (
    <HomeSection title={'About'}>
      <p className={styles.aboutParagraph}>
        Ever since I grew up I have been surrounded with technology and always
        being amazed by its functioning trying to understand how it worked or
        why it did the way it did, maybe trying to get more out of it. Flashing
        a PSP, installing custom ROMs on a 3DS and modding (almost always
        breaking and repairing) the family PC.
      </p>
      <p className={styles.aboutParagraph}>
        In 2021, while studying chemical engineering I came across a web
        development course and ever since loved it. Looking to improve day by
        day in order to create pleasing experiences in the browser.
      </p>
      <p className={styles.aboutParagraph}>
        The techonologies I use are{' '}
        <ProgrammingLanguage>Next.JS</ProgrammingLanguage>,{' '}
        <ProgrammingLanguage>React</ProgrammingLanguage>,{' '}
        <ProgrammingLanguage>JavaScript</ProgrammingLanguage>,{' '}
        <ProgrammingLanguage>Tailwind CSS</ProgrammingLanguage> and{' '}
        <ProgrammingLanguage>Firebase</ProgrammingLanguage>.
      </p>
      <p className={styles.aboutParagraph}>
        In the future I would like to keep growing as a frontend developer,
        learning more about animations and three.js. While also become a
        Fullstack with Node.JS and Mongo.
      </p>
    </HomeSection>
  )
}

export default About
