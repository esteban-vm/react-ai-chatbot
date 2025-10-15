import type { SyntaxHighlighterProps } from 'react-syntax-highlighter'
import Markdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import remarkBreaks from 'remark-breaks'
import remarkGfm from 'remark-gfm'
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

function CodeHighlighter(props: SyntaxHighlighterProps) {
  return (
    <SyntaxHighlighter
      PreTag='div'
      codeTagProps={{ style: { whiteSpace: 'pre-wrap', fontSize: '0.75rem' } }}
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      style={oneDark}
      showLineNumbers
      {...props}
    />
  )
}
