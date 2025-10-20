import { BeatLoader } from 'react-spinners'
import { useThemeStore } from '@/hooks'
import * as $ from './loading-spinner.styled'

export function LoadingSpinner() {
  const { theme } = useThemeStore()

  return (
    <$.Container>
      <BeatLoader aria-label='Loading Spinner' color={theme === 'dark' ? '#e5e5e5' : '#262626'} />
    </$.Container>
  )
}
