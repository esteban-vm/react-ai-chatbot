import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Atoms } from '@/components'
import * as $ from './language-switcher.styled'

export function LanguageSwitcher() {
  const { t, i18n } = useTranslation('translation', { keyPrefix: 'language_switcher' })
  const { resolvedLanguage, dir, changeLanguage } = i18n

  useEffect(() => {
    if (resolvedLanguage) {
      document.documentElement.lang = resolvedLanguage
      document.documentElement.dir = dir(resolvedLanguage)
    }
  }, [dir, resolvedLanguage])

  return (
    <>
      <$.LanguageButton title={t('en_button')} onClick={() => changeLanguage('en')}>
        <$.IconButton $as={Atoms.ENIcon} />
      </$.LanguageButton>
      <$.LanguageButton title={t('es_button')} onClick={() => changeLanguage('es')}>
        <$.IconButton $as={Atoms.ESIcon} />
      </$.LanguageButton>
    </>
  )
}
