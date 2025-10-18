import type { KeyboardEventHandler } from 'react'
import type { SubmitHandler } from 'react-hook-form'
import { useEffect, useRef } from 'react'
import { useForm } from 'react-hook-form'

export interface MessageFormValues {
  message: string
}

export interface UseMessageFormProps {
  shouldDisable: boolean
  onSendMessage: (content: string) => Promise<void>
}

export function useMessageForm({ shouldDisable, onSendMessage }: UseMessageFormProps) {
  const ref = useRef<HTMLFormElement>(null!)

  const { register, handleSubmit, resetField, setFocus } = useForm<MessageFormValues>({
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
      checkLength(value) {
        const hasLength = value.trim().length > 0
        if (!hasLength) return 'Enter a message'
      },
    },
  })

  const onSubmit: SubmitHandler<MessageFormValues> = ({ message }) => {
    resetField('message')
    void onSendMessage(message)
  }

  const onKeyDown: KeyboardEventHandler<HTMLTextAreaElement> = (event) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault()
      ref.current.requestSubmit()
    }
  }

  return {
    ref,
    field,
    onKeyDown,
    onSubmit: handleSubmit(onSubmit),
  }
}
