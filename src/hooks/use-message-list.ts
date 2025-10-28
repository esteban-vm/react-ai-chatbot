import type { ChatMessage } from '@/utils'
import { useEffect, useMemo } from 'react'

export interface UseMessageListProps {
  messages: ChatMessage[]
  shouldScroll: boolean
}

export function useMessageList({ messages, shouldScroll }: UseMessageListProps) {
  const groups: ChatMessage[][] = useMemo(() => {
    return messages.reduce<ChatMessage[][]>((group, message) => {
      if (message.role === 'user') group.push([])
      group.at(-1)?.push(message)
      return group
    }, [])
  }, [messages])

  useEffect(() => {
    if (shouldScroll) {
      const lastMessageGroup = document.querySelector<HTMLElement>('article[data-message]:last-of-type')

      if (lastMessageGroup?.dataset.message) {
        lastMessageGroup.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }, [shouldScroll])

  return { groups }
}
