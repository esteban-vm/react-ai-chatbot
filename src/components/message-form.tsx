import type { ChangeEventHandler, KeyboardEventHandler } from 'react'
import { useState } from 'react'
import tw from 'tailwind-styled-components'

export interface MessageFormProps {
  onSendMessage: (content: string) => Promise<void>
}

export function MessageForm({ onSendMessage }: MessageFormProps) {
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
    <Container>
      <TextBox placeholder='Your message…' value={content} onChange={handleChange} onKeyDown={handleKeyDown} />
      <SendButton title='Send message' type='button' onClick={handleClick}>
        <SendIcon />
      </SendButton>
    </Container>
  )
}

const Container = tw.div`
  flex
  h-16
  w-full
  items-center
  gap-3
`

const TextBox = tw.textarea`
  h-full
  grow
  resize-none
  rounded-lg
  bg-white
  p-3
  outline-1
  outline-transparent
  valid:outline-green-300
  invalid:outline-red-300
  focus:outline-neutral-300
`

const SendButton = tw.button`
  flex
  aspect-square
  h-full
  cursor-pointer
  items-center
  justify-center
  rounded-full
  bg-white
  hover:opacity-95
  active:scale-95
`

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
