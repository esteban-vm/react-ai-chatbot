import { useState } from 'react'
import tw from 'tailwind-styled-components'
import logo from '@/assets/chat-bot.png'
import { MessageForm, MessageItem } from '@/components'
import { AIAssistant } from '@/utils'

const assistant = new AIAssistant('gemini-2.5-flash')

export default function App() {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'system', content: 'Hello! How can I assist you right now?' },
  ])

  const addMessage = (message: Message) => {
    setMessages((prevMessages) => [...prevMessages, message])
  }

  const sendMessage = async (content: string) => {
    addMessage({ role: 'user', content })

    try {
      const reply = await assistant.chat(content)
      addMessage({ role: 'assistant', content: reply })
    } catch (error) {
      if (import.meta.env.DEV) {
        console.log(error)
      }

      addMessage({ role: 'system', content: "Sorry, I couldn't process your request. Please try again!" })
    }
  }

  return (
    <Container>
      <header>
        <AppLogo alt='logo' src={logo} />
        <AppTitle>AI Chatbot</AppTitle>
      </header>
      <MessageList>
        {messages.map((message) => (
          <MessageItem key={crypto.randomUUID()} $role={message.role}>
            {message.content}
          </MessageItem>
        ))}
      </MessageList>
      <MessageForm onSendMessage={sendMessage} />
    </Container>
  )
}

const Container = tw.main`
  my-3
  flex
  size-full
  min-h-96
  max-w-xl
  flex-col
  gap-3
  rounded-xl
  p-3
  shadow-lg
`

const AppTitle = tw.h1`
  text-center
  text-3xl
  font-semibold
`

const AppLogo = tw.img`
  mx-auto
  size-16
  select-none
`

const MessageList = tw.div`
  flex
  grow
  flex-col
  gap-1
  overflow-y-auto
  rounded-xl
  bg-white
`
