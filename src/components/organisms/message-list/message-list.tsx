import { useTranslation } from 'react-i18next'
import { Molecules } from '@/components'
import { useMessageList, useMessageStore } from '@/hooks'
import { ChatMessage } from '@/utils'
import * as $ from './message-list.styled'

export function MessageList() {
  const { isLoading, isError, messages } = useMessageStore()
  const { t } = useTranslation('translation', { keyPrefix: 'message_list' })
  const { groups } = useMessageList({ messages, shouldScroll: !isLoading })

  const welcomeMessage = ChatMessage.create('system', `**${t('welcome_message')}**`)
  const messageGroups: ChatMessage[][] = [[welcomeMessage], ...groups]

  if (isError) {
    const errorMessage = ChatMessage.create('system', `**${t('error_message')}**`)
    messageGroups.push([errorMessage])
  }

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
