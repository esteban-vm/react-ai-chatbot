import { useEffect, useMemo, useRef } from 'react'
import { Molecules } from '@/components'
import { useMessageStore } from '@/hooks'
import * as $ from './message-list.styled'

export function MessageList() {
  const { messages, isLoading } = useMessageStore()
  const listEndingRef = useRef<HTMLElement>(null)

  const messageGroups = useMemo(() => {
    return messages.reduce<Message[][]>((groups, message) => {
      if (message.role === 'user') groups.push([])
      groups.at(-1)?.push(message)
      return groups
    }, [])
  }, [messages])

  useEffect(() => {
    if (!isLoading) {
      listEndingRef.current?.scrollIntoView({ behavior: 'smooth' })
    }
  }, [isLoading])

  return (
    <$.Container>
      {isLoading ? (
        <Molecules.LoadingSpinner />
      ) : (
        <>
          {[WELCOME_MESSAGE_GROUP, ...MOCK_MESSAGES, ...messageGroups].map((messages) => {
            return (
              <$.MessageGroup key={crypto.randomUUID()}>
                {messages.map((message) => (
                  <Molecules.MessageItem key={crypto.randomUUID()} {...message} />
                ))}
              </$.MessageGroup>
            )
          })}
          <$.ListEnding ref={listEndingRef} />
        </>
      )}
    </$.Container>
  )
}

const WELCOME_MESSAGE_GROUP: Message[] = [
  {
    role: 'system',
    content: 'Hello! How can I assist you right now?',
  },
]

const MOCK_MESSAGES: Message[][] = [
  [
    {
      role: 'user',
      content: 'Hey',
    },
    {
      role: 'assistant',
      content: 'A paragraph with *emphasis* and **strong importance**.',
    },
  ],
  [
    {
      role: 'user',
      content: 'A block quote with ~strikethrough~ and a URL: https://reactjs.org.',
    },
    {
      role: 'assistant',
      content: `
## Hi from assistant
This is a paragraph.
`,
    },
  ],
  [
    {
      role: 'user',
      content: `
## Hi from user
This is a paragraph.
`,
    },
    {
      role: 'assistant',
      content: '### This is perfect!',
    },
  ],
]
