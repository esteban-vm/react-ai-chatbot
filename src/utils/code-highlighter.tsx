import type { SyntaxHighlighterProps } from 'react-syntax-highlighter'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism'

export function CodeHighlighter(props: SyntaxHighlighterProps) {
  return (
    <SyntaxHighlighter
      PreTag='div'
      codeTagProps={{ style: { whiteSpace: 'pre-wrap', fontSize: '0.75rem' } }}
      style={oneDark}
      showLineNumbers
      {...props}
    />
  )
}
