import type { ChatMessage } from '@/utils'
import { useEffect, useMemo, useRef } from 'react'

export interface UseMessageListProps {
  messages: ChatMessage[]
  shouldScroll: boolean
}

export function useMessageList({ messages, shouldScroll }: UseMessageListProps) {
  const ref = useRef<HTMLElement>(null!)

  const groups: ChatMessage[][] = useMemo(() => {
    return messages.reduce<ChatMessage[][]>((groups, message) => {
      if (message.role === 'user') groups.push([])
      groups.at(-1)?.push(message)
      return groups
    }, [])
  }, [messages])

  useEffect(() => {
    if (shouldScroll) {
      // ref.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [shouldScroll])

  return { ref, groups }
}
