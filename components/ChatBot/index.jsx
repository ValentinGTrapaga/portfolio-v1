import React, { useEffect, useRef, useState } from 'react'
import styles from './styles.module.css'

const ChatBot = () => {
  const [messages, setMessages] = useState([
    {
      isAI: true,
      message:
        "Hello, I'm a bot prepared to answer some questions about Valentin, feel free to ask me anything, I'll do my best to answer it. Keep in mind I'm being trained. Any answer given does not have to be completely true."
    }
  ])

  const [loading, setLoading] = useState(false)
  const [showChat, setShowChat] = useState(true)

  const inputRef = useRef()
  const container = useRef()

  const pStyleAI = {
    alignSelf: 'flex-start',
    backgroundColor: 'var(--accent-color)',
    borderBottomLeftRadius: '0px',
    fontWeight: '700',
    color: 'var(--text-color)'
  }

  const pStylePerson = {
    alignSelf: 'flex-end',
    backgroundColor: 'var(--background-color2)',
    borderBottomRightRadius: '0px',
    textAlign: 'right'
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const userMessage = e.target.userMessage.value
    setLoading(true)
    const personMessage = {
      isAI: false,
      message: userMessage
    }
    setMessages((prevMessages) => [...prevMessages, personMessage])
    inputRef.current.value = ''
    inputRef.current.disabled = true
    const res = await fetch('api/chatbot', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userMessage)
    })

    const { data } = await res.json()
    const AIMessage = {
      isAI: true,
      message: data
    }
    setMessages((prevMessages) => [...prevMessages, AIMessage])
    setLoading(false)
    inputRef.current.disabled = false
    container.current.scrollTo(0, inputRef.current.scrollHeight)
    inputRef.current.focus()
  }

  useEffect(() => {
    container.current?.scrollTo(0, container.current.scrollHeight)
    if (showChat) {
      inputRef.current.focus()
    }
  }, [messages, showChat])

  return showChat ? (
    <div
      className={styles.chatBotDiv}
      ref={container}>
      <div className={styles.chatBotTitleDiv}>
        <h4>Chatbot</h4>
        <button
          onClick={() => setShowChat(!showChat)}
          className={styles.closeChatBtn}>
          ×
        </button>
      </div>
      <section className={styles.chatBotMessages}>
        {messages.map(({ isAI, message }, index) => (
          <p
            key={index}
            className={styles.chatMessage}
            style={isAI ? pStyleAI : pStylePerson}>
            {message}
          </p>
        ))}{' '}
      </section>
      <form
        onSubmit={(e) => handleSubmit(e)}
        className={styles.formDiv}>
        <input
          className={styles.textInput}
          ref={inputRef}
          type='text'
          name='userMessage'
        />
        {!loading ? (
          <button className={styles.submitButton}>↩</button>
        ) : (
          <button
            className={styles.submitButton}
            disabled>
            …
          </button>
        )}
      </form>
    </div>
  ) : (
    <button
      onClick={() => setShowChat(!showChat)}
      className={styles.showChatBtn}>
      ?
    </button>
  )
}

export default ChatBot
