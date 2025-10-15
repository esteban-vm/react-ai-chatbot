import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import * as $ from './message-item.styled'

export function MessageItem({ role, content }: Message) {
  return (
    <$.Container className={role === 'user' ? 'self-end rounded-l-lg bg-neutral-100' : 'self-start'}>
      <Markdown remarkPlugins={[remarkGfm]}>{content}</Markdown>
    </$.Container>
  )
}
