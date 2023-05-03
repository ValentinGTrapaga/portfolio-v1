import React from 'react'
import { HomeSection } from '../HomeSection'
import ProgrammingLanguage from './../ProgrammingLanguage/index'
import styles from './styles.module.css'

const About = () => {
  return (
    <HomeSection title={'About me'}>
      <div className={styles.aboutDiv}>
        <p className={styles.aboutParagraph}>
          My name is Valentin Gonzalez Trapaga, and I am a self-taught Frontend
          Developer specialized in React. Currently based in Argentina, but open
          to work remotely from anywhere I have a strong passion for developing
          innovative and responsive web applications. With years of experience
          in the field, I have honed my skills through various real-world
          projects and a continuous pursuit of knowledge. Through this website,
          I aim to showcase my portfolio, skills, and achievements in the world
          of Frontend Development and to connect with like-minded people and
          businesses. In the future I would like to keep growing as a frontend
          developer, learning more about animations and three.js. While also
          become a Fullstack with Node.JS and Mongo.
        </p>
        <p className={styles.aboutParagraph}>
          Ever since I grew up I have been surrounded with technology and always
          being amazed by its functioning trying to understand how it worked or
          why it did the way it did, maybe trying to get more out of it.
          Flashing a PSP, installing custom ROMs on a 3DS and modding (almost
          always breaking and repairing) the family PC.
        </p>
        <p className={styles.aboutParagraph}>
          In 2021, while studying chemical engineering I came across a web
          development course and ever since loved it. Looking to improve day by
          day in order to create pleasing experiences in the browser.
        </p>
        <p className={styles.aboutParagraph}>
          The techonologies I use are{' '}
          <ProgrammingLanguage>JavaScript</ProgrammingLanguage>,{' '}
          <ProgrammingLanguage>React</ProgrammingLanguage>,{' '}
          <ProgrammingLanguage>Next.JS</ProgrammingLanguage>,{' '}
          <ProgrammingLanguage>Tailwind CSS</ProgrammingLanguage> and{' '}
          <ProgrammingLanguage>Styled-components</ProgrammingLanguage> and{' '}
          <ProgrammingLanguage>Firebase</ProgrammingLanguage>.
        </p>
      </div>
    </HomeSection>
  )
}

export default About
