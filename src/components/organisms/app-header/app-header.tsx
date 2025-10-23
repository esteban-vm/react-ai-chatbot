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
          <Molecules.ThemeSwitcher />
        </$.ButtonGroup>
      </$.ButtonGroupContainer>
      <$.AppLogo alt='logo' src='/images/chat-bot.png' />
      <$.AppTitle>AI Chatbot</$.AppTitle>
    </header>
  )
}
