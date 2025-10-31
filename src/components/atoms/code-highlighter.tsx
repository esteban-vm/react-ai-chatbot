import type { SyntaxHighlighterProps } from 'react-syntax-highlighter'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneDark, oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { useThemeStore } from '@/hooks'

export function CodeHighlighter(props: SyntaxHighlighterProps) {
  const { theme } = useThemeStore()

  return (
    <SyntaxHighlighter
      PreTag='div'
      codeTagProps={{ style: { /* whiteSpace: 'pre-wrap', */ fontSize: '0.75rem' } }}
      style={theme === 'dark' ? oneDark : oneLight}
      showLineNumbers
      {...props}
    />
  )
}
