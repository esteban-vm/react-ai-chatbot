import logo from '@/assets/chat-bot.png'
import * as $ from './app-header.styled'

export function AppHeader() {
  return (
    <$.Container>
      <$.AppLogo alt='logo' src={logo} />
      <$.AppTitle>AI Chatbot</$.AppTitle>
    </$.Container>
  )
}
