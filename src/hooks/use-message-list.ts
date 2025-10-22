import { useEffect, useMemo, useRef } from 'react'

export interface UseMessageListProps {
  messages: Message[]
  shouldScroll: boolean
}

export function useMessageList({ messages, shouldScroll }: UseMessageListProps) {
  const ref = useRef<HTMLElement>(null!)

  const groups = useMemo(() => {
    return messages.reduce<Message[][]>((groups, message) => {
      if (message.role === 'user') groups.push([])
      groups.at(-1)?.push(message)
      return groups
    }, [])
  }, [messages])

  useEffect(() => {
    if (shouldScroll) {
      ref.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [shouldScroll])

  return { ref, groups }
}
