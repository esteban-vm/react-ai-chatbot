import { useState } from 'react'
import logo from '@/assets/chat-bot.png'
import { LoadingSpinner, MessageForm, MessageItem } from '@/components'
// import { AIAssistant } from '@/utils'
import * as $ from './App.styled'

// const assistant = new AIAssistant('gemini-2.5-flash')

export default function App() {
  const [isLoading, setIsLoading] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'system',
      content: 'Hello! How can I assist you right now?',
    },
  ])

  const addMessage = (message: Message) => {
    setMessages((prevMessages) => [...prevMessages, message])
  }

  const sendMessage = async (content: string) => {
    addMessage({ role: 'user', content })
    setIsLoading(true)

    try {
      await new Promise((resolve) => setTimeout(resolve, 7_000))
      // const reply = await assistant.chat(content)
      // addMessage({ role: 'assistant', content: reply })
    } catch (error) {
      if (import.meta.env.DEV) {
        console.log(error)
      }

      addMessage({
        role: 'system',
        content: "Sorry, I couldn't process your request. Please try again!",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <$.Container>
      <header>
        <$.AppLogo alt='logo' src={logo} />
        <$.AppTitle>AI Chatbot</$.AppTitle>
      </header>
      <$.MessageList>
        {isLoading && <LoadingSpinner />}
        {messages.map((message) => (
          <MessageItem key={crypto.randomUUID()} {...message} />
        ))}
      </$.MessageList>
      <MessageForm isDisabled={isLoading} onSendMessage={sendMessage} />
    </$.Container>
  )
}
