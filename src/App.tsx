import logo from '@/assets/chat-bot.png'
import { Molecules, Organisms } from '@/components'
import * as $ from './App.styled'

export default function App() {
  return (
    <$.Container>
      <header>
        <$.AppLogo alt='logo' src={logo} />
        <$.AppTitle>AI Chatbot</$.AppTitle>
      </header>
      <Organisms.MessageList />
      <Molecules.MessageForm />
    </$.Container>
  )
}
