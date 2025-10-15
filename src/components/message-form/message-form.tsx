import TextareaAutosize from 'react-textarea-autosize'
import { useMessageForm } from '@/hooks'
import * as $ from './message-form.styled'

export interface MessageFormProps {
  isDisabled: boolean
  onSendMessage: (content: string) => Promise<void>
}

export function MessageForm({ isDisabled, onSendMessage }: MessageFormProps) {
  const { formRef, messageField, handleKeyDown, onSubmit } = useMessageForm({ isDisabled, onSendMessage })

  return (
    <$.Container ref={formRef} onSubmit={onSubmit}>
      <$.TextBox
        $as={TextareaAutosize}
        disabled={isDisabled}
        maxRows={4}
        minRows={2}
        placeholder='Your message…'
        onKeyDown={handleKeyDown}
        {...messageField}
      />
      <$.SendButton disabled={isDisabled} title='Send message' type='submit'>
        <$.SendIcon />
      </$.SendButton>
    </$.Container>
  )
}
