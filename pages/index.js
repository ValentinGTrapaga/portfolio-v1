import Head from 'next/head'
import About from '../components/About'
import Main from './../components/Main'
import Projects from '../components/Projects'
import { EmailForm } from '../components/EmailForm'
import ChatBot from '../components/ChatBot'
import { createPortal } from 'react-dom'

export default function Home() {
  return (
    <>
      <Head>
        <title>Valentin</title>
        <meta name='Valentin' />
        <link
          rel='icon'
          href='./favicon.ico'
        />
      </Head>
      <Main />
      <About />
      <Projects />
      <EmailForm />
    </>
  )
}
