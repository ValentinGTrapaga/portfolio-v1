import Head from 'next/head'
import styles from '../styles/Home.module.css'
import About from '../components/About'
import Main from './../components/Main'
import Projects from '../components/Projects'

export default function Home() {
  const handleScroll = () => {
    const pageHeight = window.innerHeight
    window.scrollBy(0, pageHeight)
  }

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
    </>
  )
}
