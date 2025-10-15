import type { ReactNode } from 'react'
import { useEffect, useRef } from 'react'
import * as $ from './message-list.styled'

export interface MessageListProps {
  children: ReactNode
  itemCount: number
}

export function MessageList({ itemCount, children }: MessageListProps) {
  const messagesEndRef = useRef<HTMLDivElement>(null!)

  useEffect(() => {
    messagesEndRef.current.scrollIntoView({ behavior: 'smooth' })
  }, [itemCount])

  return (
    <$.Container>
      {children}
      <div ref={messagesEndRef} />
    </$.Container>
  )
}
