import { useTranslation } from 'react-i18next'
import { v4 as uuidv4 } from 'uuid'
import { Molecules } from '@/components'
import { mockGroups } from '@/constants'
import { useMessageList, useMessageStore } from '@/hooks'
import { ChatMessage } from '@/utils'
import * as $ from './message-list.styled'

export function MessageList() {
  const { isLoading, isError, messages } = useMessageStore()
  const { t } = useTranslation('translation', { keyPrefix: 'message_list' })
  const { groups } = useMessageList({ messages, shouldScroll: !isLoading })

  const welcomeMessage = ChatMessage.create('system', `**${t('welcome_message')}**`)
  const messageGroups: ChatMessage[][] = [[welcomeMessage], ...mockGroups, ...groups]

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
            <$.MessageGroup key={uuidv4()} data-message>
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
