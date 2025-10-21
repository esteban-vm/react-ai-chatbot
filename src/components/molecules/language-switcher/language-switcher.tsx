import { Atoms } from '@/components'
import * as $ from './language-switcher.styled'

export function LanguageSwitcher() {
  return (
    <>
      <$.LocaleButton title='Switch to English'>
        <$.IconButton $as={Atoms.ENIcon} />
      </$.LocaleButton>
      <$.LocaleButton title='Switch to Spanish'>
        <$.IconButton $as={Atoms.ESIcon} />
      </$.LocaleButton>
    </>
  )
}
