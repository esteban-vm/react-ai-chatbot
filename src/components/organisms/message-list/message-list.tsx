import { useEffect, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { Molecules } from '@/components'
import { mockGroups } from '@/constants'
import { useMessageStore } from '@/hooks'
import { ChatMessage } from '@/utils'
import * as $ from './message-list.styled'

export function MessageList() {
  const { isLoading, isError, messages } = useMessageStore()
  const { t } = useTranslation('translation', { keyPrefix: 'message_list' })

  const realGroups: ChatMessage[][] = useMemo(() => {
    return messages.reduce<ChatMessage[][]>((groups, message) => {
      if (message.role === 'user') groups.push([])
      groups.at(-1)?.push(message)
      return groups
    }, [])
  }, [messages])

  const welcomeMessage = ChatMessage.create('system', `**${t('welcome_message')}**`)
  const messageGroups: ChatMessage[][] = [[welcomeMessage], ...mockGroups, ...realGroups]

  if (isError) {
    const errorMessage = ChatMessage.create('system', `**${t('error_message')}**`)
    messageGroups.push([errorMessage])
  }

  useEffect(() => {
    if (!isLoading) {
      const lastMessageGroup = document.querySelector<HTMLElement>('article[data-message]:last-of-type')

      if (lastMessageGroup?.dataset.message) {
        lastMessageGroup.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }, [isLoading])

  return (
    <$.Container>
      {isLoading ? (
        <Molecules.LoadingSpinner />
      ) : (
        messageGroups.map((messages) => {
          return (
            <$.MessageGroup key={crypto.randomUUID()} data-message>
              {messages.map((message) => (
                <Molecules.MessageItem key={message.id} message={message} />
              ))}
            </$.MessageGroup>
          )
        })
      )}
    </$.Container>
  )
}
