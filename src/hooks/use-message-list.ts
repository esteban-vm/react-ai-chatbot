import type { ChatMessage } from '@/utils'
import { useEffect, useMemo } from 'react'

export interface UseMessageListProps {
  shouldScroll: boolean
  messages: ChatMessage[]
}

export function useMessageList({ shouldScroll, messages }: UseMessageListProps) {
  const groups: ChatMessage[][] = useMemo(() => {
    return messages.reduce<ChatMessage[][]>((group, message) => {
      if (message.role === 'user') group.push([])
      group.at(-1)?.push(message)
      return group
    }, [])
  }, [messages])

  useEffect(() => {
    if (shouldScroll) {
      const lastGroup = document.querySelector('article[data-message]:last-of-type')!
      lastGroup.scrollIntoView({ behavior: 'smooth' })
    }
  }, [shouldScroll])

  return { groups }
}
