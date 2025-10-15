import type { ChangeEventHandler, KeyboardEventHandler } from 'react'
import { useState } from 'react'
import TextareaAutosize from 'react-textarea-autosize'
import * as $ from './message-form.styled'

export interface MessageFormProps {
  isDisabled: boolean
  onSendMessage: (content: string) => Promise<void>
}

export function MessageForm({ isDisabled, onSendMessage }: MessageFormProps) {
  const [content, setContent] = useState('')

  const handleClick = () => {
    if (content.trim().length > 0) {
      void onSendMessage(content)
      setContent('')
    }
  }

  const handleChange: ChangeEventHandler<HTMLTextAreaElement> = (event) => {
    setContent(event.target.value)
  }

  const handleKeyDown: KeyboardEventHandler<HTMLTextAreaElement> = (event) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault()
      handleClick()
    }
  }

  return (
    <$.Container>
      <$.TextBox
        $as={TextareaAutosize}
        disabled={isDisabled}
        maxRows={4}
        minRows={2}
        placeholder='Your message…'
        value={content}
        autoFocus
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <$.SendButton disabled={isDisabled} title='Send message' type='button' onClick={handleClick}>
        <$.SendIcon />
      </$.SendButton>
    </$.Container>
  )
}
