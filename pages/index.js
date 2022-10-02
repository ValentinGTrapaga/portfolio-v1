import Head from 'next/head'
import styles from '../styles/Home.module.css'
import About from '../components/About'
import Main from './../components/Main'
import Projects from '../components/Projects'
import { EmailForm } from '../components/EmailForm'

export default function Home() {
  return (
    <>
      <Head>
        <title>Valentin</title>
        <meta name='Valentin' />
        <link
          rel='icon'
          href='/favicon.ico'
        />
      </Head>
      <Main />
      <About />
      <Projects />
      <EmailForm />
    </>
  )
}
