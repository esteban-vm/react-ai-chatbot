import { Molecules, Organisms } from '@/components'
import * as $ from './App.styled'

export default function App() {
  return (
    <$.Container>
      <Molecules.AppHeader />
      <Organisms.MessageList />
      <Molecules.MessageForm />
    </$.Container>
  )
}
