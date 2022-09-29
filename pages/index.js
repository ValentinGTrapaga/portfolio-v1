import Head from 'next/head'
import styles from '../styles/Home.module.css'
import About from '../components/About'
import Main from './../components/Main'

export default function Home() {
  return (
    <>
      <Head>
        <title>Valentin's portfolio</title>
        <meta name='Valentin' />
        <link
          rel='icon'
          href='/favicon.ico'
        />
      </Head>
      <Main />
      <About />
    </>
  )
}
