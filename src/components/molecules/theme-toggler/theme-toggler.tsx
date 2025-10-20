import { MonitorCog, Moon, Sun } from 'lucide-react'
import { useEffect } from 'react'
import { useThemeStore } from '@/hooks'
import * as $ from './theme-toggler.styled'

export function ThemeToggler() {
  const { theme, setTheme, resolvedTheme, setResolvedTheme } = useThemeStore()

  useEffect(() => {
    if (theme === 'system') {
      const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      setTheme(isDark ? 'dark' : 'light')
    } else {
      setResolvedTheme(theme)
    }
  }, [setResolvedTheme, setTheme, theme])

  useEffect(() => {
    if (resolvedTheme) {
      document.documentElement.className = resolvedTheme
    }
  }, [resolvedTheme])

  return (
    <$.Container>
      <$.ButtonGroup>
        <$.ThemeButton title='Dark theme' onClick={() => setTheme('dark')}>
          <$.IconButton $as={Moon} />
        </$.ThemeButton>
        <$.ThemeButton title='Light theme' onClick={() => setTheme('light')}>
          <$.IconButton $as={Sun} />
        </$.ThemeButton>
        <$.ThemeButton title='System theme' onClick={() => setTheme('system')}>
          <$.IconButton $as={MonitorCog} />
        </$.ThemeButton>
      </$.ButtonGroup>
    </$.Container>
  )
}
