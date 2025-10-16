import TextareaAutosize from 'react-textarea-autosize'
import { useMessageForm, useMessageStore } from '@/hooks'
import * as $ from './message-form.styled'

export function MessageForm() {
  const { isLoading, sendMessage } = useMessageStore()

  const { formRef, messageField, handleKeyDown, onSubmit } = useMessageForm({
    isDisabled: isLoading,
    onSendMessage: sendMessage,
  })

  return (
    <$.Container ref={formRef} onSubmit={onSubmit}>
      <$.TextBox
        $as={TextareaAutosize}
        disabled={isLoading}
        maxRows={4}
        minRows={2}
        placeholder='Your message…'
        onKeyDown={handleKeyDown}
        {...messageField}
      />
      <$.SendButton disabled={isLoading} title='Send message' type='submit'>
        <$.SendIcon />
      </$.SendButton>
    </$.Container>
  )
}
