import type { ChangeEventHandler, KeyboardEventHandler } from 'react'
import { useState } from 'react'
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
        disabled={isDisabled}
        placeholder='Your message…'
        value={content}
        autoFocus
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <$.SendButton disabled={isDisabled} title='Send message' type='button' onClick={handleClick}>
        <SendIcon />
      </$.SendButton>
    </$.Container>
  )
}

function SendIcon() {
  return (
    <svg
      className='size-3/4 fill-neutral-300'
      fill='#FFFFFF'
      viewBox='0 -960 960 960'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M120-160v-640l760 320-760 320Zm80-120 474-200-474-200v140l240 60-240 60v140Zm0 0v-400 400Z' />
    </svg>
  )
}
