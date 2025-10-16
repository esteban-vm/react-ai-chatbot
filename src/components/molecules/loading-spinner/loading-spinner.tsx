import { BeatLoader } from 'react-spinners'
import * as $ from './loading-spinner.styled'

export function LoadingSpinner() {
  return (
    <$.Container>
      <BeatLoader aria-label='Loading Spinner' />
    </$.Container>
  )
}
