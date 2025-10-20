declare global {
  namespace JSX {
    // eslint-disable-next-line @typescript-eslint/no-empty-object-type
    interface IntrinsicElements extends React.JSX.IntrinsicElements {}
  }

  interface Message {
    role: Role
    content?: string
  }

  type Role = 'user' | 'assistant' | 'system'

  type Theme = ResolvedTheme | 'system'
  type ResolvedTheme = 'light' | 'dark'
}

export {}
