import { SendHorizontal } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import TextareaAutosize from 'react-textarea-autosize'
import { useMessageForm, useMessageStore } from '@/hooks'
import * as $ from './message-form.styled'

export function MessageForm() {
  const { isLoading, sendMessage } = useMessageStore()
  const { t } = useTranslation('translation', { keyPrefix: 'message_form' })

  const { ref, field, error, onKeyDown, onSubmit } = useMessageForm({
    shouldDisable: isLoading,
    onSendMessage: sendMessage,
  })

  return (
    <$.Container ref={ref} onSubmit={onSubmit}>
      <$.TextBox
        $as={TextareaAutosize}
        aria-invalid={!!error}
        disabled={isLoading}
        maxRows={4}
        minRows={2}
        placeholder={t('textbox')}
        onKeyDown={onKeyDown}
        {...field}
      />
      <$.SendButton disabled={isLoading} title={t('send_button')} type='submit'>
        <$.IconButton $as={SendHorizontal} />
      </$.SendButton>
    </$.Container>
  )
}
