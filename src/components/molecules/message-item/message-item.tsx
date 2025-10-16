import Markdown from 'react-markdown'
import remarkBreaks from 'remark-breaks'
import remarkGfm from 'remark-gfm'
import { Atoms } from '@/components'
import { cn } from '@/utils'
import * as $ from './message-item.styled'

export function MessageItem({ role, content }: Message) {
  return (
    <$.Container className={cn(role === 'user' ? 'self-end rounded-xl bg-neutral-100' : 'self-start')}>
      <Markdown
        remarkPlugins={[remarkGfm, remarkBreaks]}
        components={{
          code(props) {
            const { children, className = '', node, style: _, ...rest } = props
            const match = /language-(\w+)/.exec(className)
            const highlighted = String(children).replace(/\n$/, '')

            return match ? (
              <Atoms.CodeHighlighter {...rest} language={match[1]}>
                {highlighted}
              </Atoms.CodeHighlighter>
            ) : (
              <code {...props} className={cn(className, 'text-xs whitespace-pre-wrap')}>
                {children}
              </code>
            )
          },
        }}
      >
        {content}
      </Markdown>
    </$.Container>
  )
}
