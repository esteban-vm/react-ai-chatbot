import { MonitorCog, MoonStar, Sun } from 'lucide-react'
import { useEffect } from 'react'
import { useThemeStore } from '@/hooks'
import * as $ from './theme-switcher.styled'

export function ThemeSwitcher() {
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
    <>
      <$.ThemeButton title='Dark theme' onClick={() => setTheme('dark')}>
        <MoonStar className='fill-violet-400 text-violet-500' />
      </$.ThemeButton>
      <$.ThemeButton title='Light theme' onClick={() => setTheme('light')}>
        <Sun className='fill-amber-400 text-amber-500' />
      </$.ThemeButton>
      <$.ThemeButton title='System theme' onClick={() => setTheme('system')}>
        <MonitorCog className='fill-sky-400 text-emerald-500' />
      </$.ThemeButton>
    </>
  )
}
