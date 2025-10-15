import type { KeyboardEventHandler } from 'react'
import type { SubmitHandler } from 'react-hook-form'
import type { MessageFormProps } from '@/components'
import { useEffect, useRef } from 'react'
import { useForm } from 'react-hook-form'

export interface MessageFormValues {
  message: string
}

export function useMessageForm({ isDisabled, onSendMessage }: MessageFormProps) {
  const formRef = useRef<HTMLFormElement>(null!)

  const { register, handleSubmit, resetField, setFocus } = useForm<MessageFormValues>({
    mode: 'onChange',
    defaultValues: { message: '' },
    shouldUseNativeValidation: true,
  })

  useEffect(() => {
    if (!isDisabled) {
      setFocus('message')
    }
  }, [isDisabled, setFocus])

  const messageField = register('message', {
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

  const handleKeyDown: KeyboardEventHandler<HTMLTextAreaElement> = (event) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault()
      formRef.current.requestSubmit()
    }
  }

  return {
    formRef,
    messageField,
    handleKeyDown,
    onSubmit: handleSubmit(onSubmit),
  }
}
