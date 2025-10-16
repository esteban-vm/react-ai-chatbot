import { useEffect, useRef } from 'react'
import { Molecules } from '@/components'
import { useMessageStore } from '@/hooks'
import * as $ from './message-list.styled'

export function MessageList() {
  const { messages, isLoading } = useMessageStore()
  const messagesEndRef = useRef<HTMLDivElement>(null!)

  useEffect(() => {
    messagesEndRef.current.scrollIntoView({ behavior: 'smooth' })
  }, [messages.length])

  return (
    <$.Container>
      {isLoading && <Molecules.LoadingSpinner />}
      {messages.map((message) => (
        <Molecules.MessageItem key={crypto.randomUUID()} {...message} />
      ))}
      <div ref={messagesEndRef} />
    </$.Container>
  )
}
