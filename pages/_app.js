import AppLayout from '../components/AppLayout'
import ChatBot from './../components/ChatBot/index'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <AppLayout>
        <Component {...pageProps} />
        <ChatBot />
      </AppLayout>
    </>
  )
}

export default MyApp
