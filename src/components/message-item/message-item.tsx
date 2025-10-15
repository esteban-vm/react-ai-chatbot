import Markdown from 'react-markdown'
import remarkBreaks from 'remark-breaks'
import remarkGfm from 'remark-gfm'
import { CodeHighlighter } from '@/utils'
import * as $ from './message-item.styled'

export function MessageItem({ role, content }: Message) {
  return (
    <$.Container className={role === 'user' ? 'self-end rounded-l-lg bg-neutral-100' : 'self-start'}>
      <Markdown
        remarkPlugins={[remarkGfm, remarkBreaks]}
        components={{
          code(props) {
            const { children, className = '', node, style: _, ...rest } = props
            const match = /language-(\w+)/.exec(className)
            // eslint-disable-next-line @typescript-eslint/no-base-to-string
            const codeContent = String(children).replace(/\n$/, '')

            return match ? (
              <CodeHighlighter {...rest} language={match[1]}>
                {codeContent}
              </CodeHighlighter>
            ) : (
              <code {...props} className={`${className} text-xs whitespace-pre-wrap`}>
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
