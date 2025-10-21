import BadWordsNext from 'bad-words-next'
import en from 'bad-words-next/lib/en'
import es from 'bad-words-next/lib/es'

export type ValidationChecker = (value: string, message: string) => string | undefined

export const checkLength: ValidationChecker = (value, message) => {
  const hasLength = value.trim().length > 0
  if (!hasLength) return message
}

export const checkProfanity: ValidationChecker = (value, message) => {
  const isProfane = badWords.check(value)
  if (isProfane) return message
}

const badWords = new BadWordsNext()

badWords.add(en)
badWords.add(es)
