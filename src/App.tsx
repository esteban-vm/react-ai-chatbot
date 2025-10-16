import logo from '@/assets/chat-bot.png'
import { MessageForm, MessageList } from '@/components'
import * as $ from './App.styled'

export default function App() {
  return (
    <$.Container>
      <header>
        <$.AppLogo alt='logo' src={logo} />
        <$.AppTitle>AI Chatbot</$.AppTitle>
      </header>
      <MessageList />
      <MessageForm />
    </$.Container>
  )
}
