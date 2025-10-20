import { SendHorizontal } from 'lucide-react'
import TextareaAutosize from 'react-textarea-autosize'
import { useMessageForm, useMessageStore } from '@/hooks'
import * as $ from './message-form.styled'

export function MessageForm() {
  const { isLoading, sendMessage } = useMessageStore()

  const { ref, field, onKeyDown, onSubmit } = useMessageForm({
    shouldDisable: isLoading,
    onSendMessage: sendMessage,
  })

  return (
    <$.Container ref={ref} onSubmit={onSubmit}>
      <$.TextBox
        $as={TextareaAutosize}
        disabled={isLoading}
        maxRows={4}
        minRows={2}
        placeholder='Your message…'
        onKeyDown={onKeyDown}
        {...field}
      />
      <$.SendButton disabled={isLoading} title='Send message' type='submit'>
        <$.IconButton $as={SendHorizontal} />
      </$.SendButton>
    </$.Container>
  )
}
