import logo from '@/assets/chat-bot.png'
import { Molecules } from '@/components'
import * as $ from './app-header.styled'

export function AppHeader() {
  return (
    <$.Container>
      <Molecules.ThemeToggler />
      <$.AppLogo alt='logo' src={logo} />
      <$.AppTitle>AI Chatbot</$.AppTitle>
    </$.Container>
  )
}
