import { SendHorizontal } from 'lucide-react'
import { useId } from 'react'
import { useTranslation } from 'react-i18next'
import TextareaAutosize from 'react-textarea-autosize'
import { useMessageForm, useMessageStore } from '@/hooks'
import * as $ from './message-form.styled'

export function MessageForm() {
  const errorId = useId()
  const { isLoading, isStreaming, sendMessageStream } = useMessageStore()
  const { t } = useTranslation('translation', { keyPrefix: 'message_form' })

  const { ref, field, error, onKeyDown, onSubmit } = useMessageForm({
    onSendMessage: sendMessageStream,
    shouldFocus: !isLoading && !isStreaming,
  })

  return (
    <form ref={ref} onSubmit={onSubmit}>
      <$.Container disabled={isLoading || isStreaming}>
        <$.FormControl>
          <$.TextBox
            $as={TextareaAutosize}
            aria-errormessage={errorId}
            aria-invalid={!!error}
            maxRows={4}
            minRows={2}
            placeholder={t('textbox')}
            required
            onKeyDown={onKeyDown}
            {...field}
          />
          <$.ErrorFeedback id={errorId} role='alert'>
            {error?.message}
          </$.ErrorFeedback>
        </$.FormControl>
        <$.SendButton title={t('send_button')} type='submit'>
          <$.IconButton $as={SendHorizontal} />
        </$.SendButton>
      </$.Container>
    </form>
  )
}
