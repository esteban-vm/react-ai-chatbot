import { useEffect, useMemo, useRef } from 'react'

export interface UseMessageListProps {
  shouldScroll: boolean
  messages: Message[]
}

export function useMessageList({ shouldScroll, messages }: UseMessageListProps) {
  const listEndingRef = useRef<HTMLElement>(null)

  const messageGroups = useMemo(() => {
    return messages.reduce<Message[][]>((groups, message) => {
      if (message.role === 'user') groups.push([])
      groups.at(-1)?.push(message)
      return groups
    }, [])
  }, [messages])

  useEffect(() => {
    if (shouldScroll) {
      listEndingRef.current?.scrollIntoView({ behavior: 'smooth' })
    }
  }, [shouldScroll])

  return {
    listEndingRef,
    messageGroups,
  }
}
