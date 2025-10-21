import { useTranslation } from 'react-i18next'
import { Atoms } from '@/components'
import * as $ from './language-switcher.styled'

export function LanguageSwitcher() {
  const { t } = useTranslation('translation', { keyPrefix: 'language_switcher' })

  return (
    <>
      <$.LocaleButton title={t('en_button')}>
        <$.IconButton $as={Atoms.ENIcon} />
      </$.LocaleButton>
      <$.LocaleButton title={t('es_button')}>
        <$.IconButton $as={Atoms.ESIcon} />
      </$.LocaleButton>
    </>
  )
}
