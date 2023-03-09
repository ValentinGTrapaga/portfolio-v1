import React, { useEffect, useRef, useState } from 'react'
import styles from './styles.module.css'

const ChatBot = () => {
  const [messages, setMessages] = useState([
    {
      isAI: true,
      message:
        "Hello, I'm a bot prepared to answer some questions about Valentin, feel free to ask me anything, I'll do my best to answer it"
    }
  ])

  const inputRef = useRef(null)
  const container = useRef(null)

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
    console.log(userMessage)
    const personMessage = {
      isAI: false,
      message: userMessage
    }
    setMessages((prevMessages) => [...prevMessages, personMessage])
    inputRef.current.disabled = true
    const res = await fetch('api/chatbot', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userMessage)
    })
    inputRef.current.value = ''
    const data = await res.json()
    const AIMessage = {
      isAI: true,
      message: data.data
    }
    setMessages((prevMessages) => [...prevMessages, AIMessage])
    inputRef.current.disabled = false
    console.log(inputRef.current.scrollHeight)
    container.current.scrollTo(0, inputRef.current.scrollHeight)
    inputRef.current.focus()
  }

  return (
    <div
      className={styles.chatBotDiv}
      ref={container}>
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
        <button className={styles.submitButton}>Send</button>
      </form>
    </div>
  )
}

export default ChatBot
