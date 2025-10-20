import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export interface ThemeStore {
  theme: Theme
  resolvedTheme?: ResolvedTheme
  setTheme: (theme: Theme) => void
  setResolvedTheme: (theme: ResolvedTheme) => void
}

export const useThemeStore = create<ThemeStore>()(
  persist(
    (set) => {
      return {
        theme: 'system',
        setTheme(theme) {
          set({ theme })
        },
        setResolvedTheme(theme) {
          set({ resolvedTheme: theme })
        },
      }
    },
    {
      name: 'app-theme',
      partialize(state) {
        return { theme: state.resolvedTheme }
      },
    }
  )
)
