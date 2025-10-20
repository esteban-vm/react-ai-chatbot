import logo from '@/assets/chat-bot.png'
import { Molecules } from '@/components'
import * as $ from './app-header.styled'

export function AppHeader() {
  return (
    <header>
      <$.ButtonGroupContainer>
        <$.ButtonGroup>
          <Molecules.LanguageSwitcher />
        </$.ButtonGroup>
        <$.ButtonGroup>
          <Molecules.ThemeToggler />
        </$.ButtonGroup>
      </$.ButtonGroupContainer>
      <$.AppLogo alt='logo' src={logo} />
      <$.AppTitle>AI Chatbot</$.AppTitle>
    </header>
  )
}
