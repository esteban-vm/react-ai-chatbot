import { Molecules, Organisms } from '@/components'
import * as $ from '@/styles/app.styled'

export default function App() {
  return (
    <$.Container>
      <Organisms.AppHeader />
      <Organisms.MessageList />
      <Molecules.MessageForm />
    </$.Container>
  )
}
