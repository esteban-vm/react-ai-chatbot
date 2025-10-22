declare global {
  namespace JSX {
    // eslint-disable-next-line @typescript-eslint/no-empty-object-type
    interface IntrinsicElements extends React.JSX.IntrinsicElements {}
  }

  type Theme = ResolvedTheme | 'system'
  type ResolvedTheme = 'light' | 'dark'
  type Role = 'user' | 'assistant' | 'system'
}

export {}
