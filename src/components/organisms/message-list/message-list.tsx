import { useEffect, useMemo, useRef } from 'react'
import { Molecules } from '@/components'
import { useMessageStore } from '@/hooks'
import { MOCK_MESSAGE_GROUPS, WELCOME_MESSAGE_GROUP } from '@/utils'
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
          {[WELCOME_MESSAGE_GROUP, ...MOCK_MESSAGE_GROUPS, ...messageGroups].map((messages) => {
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
