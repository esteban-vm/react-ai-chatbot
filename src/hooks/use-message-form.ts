import type { KeyboardEventHandler } from 'react'
import type { SubmitHandler } from 'react-hook-form'
import { useEffect, useRef } from 'react'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { checkLength, checkProfanity } from '@/utils'

export interface MessageFormValues {
  message: string
}

export interface UseMessageFormProps {
  shouldDisable: boolean
  onSendMessage: (content: string) => Promise<void>
}

export function useMessageForm({ shouldDisable, onSendMessage }: UseMessageFormProps) {
  const ref = useRef<HTMLFormElement>(null!)
  const { t } = useTranslation('translation', { keyPrefix: 'message_form.validations' })

  const { register, handleSubmit, resetField, setFocus, formState } = useForm<MessageFormValues>({
    mode: 'onChange',
    defaultValues: { message: '' },
    shouldUseNativeValidation: true,
  })

  useEffect(() => {
    if (!shouldDisable) {
      setFocus('message')
    }
  }, [shouldDisable, setFocus])

  const field = register('message', {
    validate: {
      length: (value) => checkLength(value, t('length')),
      profanity: (value) => checkProfanity(value, t('profanity')),
    },
  })

  const onSubmit: SubmitHandler<MessageFormValues> = ({ message }) => {
    resetField('message')
    navigator.vibrate(100)
    void onSendMessage(message)
  }

  const onKeyDown: KeyboardEventHandler<HTMLTextAreaElement> = (event) => {
    const isTouchScreen = matchMedia('(pointer: coarse)').matches
    const isEnterPressed = event.key === 'Enter' && !event.shiftKey

    if (!isTouchScreen && isEnterPressed) {
      event.preventDefault()
      ref.current.requestSubmit()
    }
  }

  return {
    ref,
    field,
    onKeyDown,
    error: formState.errors.message,
    onSubmit: handleSubmit(onSubmit),
  }
}
