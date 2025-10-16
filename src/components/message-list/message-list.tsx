import { useEffect, useRef } from 'react'
import { useMessageStore } from '@/hooks'
import { LoadingSpinner } from './loading-spinner'
import { MessageItem } from './message-item'
import * as $ from './message-list.styled'

export function MessageList() {
  const { messages, isLoading } = useMessageStore()
  const messagesEndRef = useRef<HTMLDivElement>(null!)

  useEffect(() => {
    messagesEndRef.current.scrollIntoView({ behavior: 'smooth' })
  }, [messages.length])

  return (
    <$.Container>
      {isLoading && <LoadingSpinner />}
      {messages.map((message) => (
        <MessageItem key={crypto.randomUUID()} {...message} />
      ))}
      <div ref={messagesEndRef} />
    </$.Container>
  )
}
