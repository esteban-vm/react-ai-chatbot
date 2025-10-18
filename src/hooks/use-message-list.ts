import { useEffect, useMemo, useRef } from 'react'

export interface UseMessageListProps {
  shouldScroll: boolean
  messageList: Message[]
}

export function useMessageList({ shouldScroll, messageList }: UseMessageListProps) {
  const ref = useRef<HTMLElement>(null!)

  const groups = useMemo(() => {
    return messageList.reduce<Message[][]>((groups, message) => {
      if (message.role === 'user') groups.push([])
      groups.at(-1)?.push(message)
      return groups
    }, [])
  }, [messageList])

  useEffect(() => {
    if (shouldScroll) {
      ref.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [shouldScroll])

  return { ref, groups }
}
