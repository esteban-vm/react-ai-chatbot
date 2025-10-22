import { useTranslation } from 'react-i18next'
import { Molecules } from '@/components'
import { useMessageList, useMessageStore } from '@/hooks'
import { ChatMessage } from '@/utils'
import * as $ from './message-list.styled'

export function MessageList() {
  const { isLoading, isError, messages } = useMessageStore()
  const { t } = useTranslation('translation', { keyPrefix: 'message_list' })
  const { ref, groups } = useMessageList({ messages, shouldScroll: !isLoading })

  const WELCOME_MESSAGE_GROUP = new ChatMessage('system', `**${t('welcome_message')}**`)
  const messageGroups: ChatMessage[][] = [[WELCOME_MESSAGE_GROUP], ...groups]

  if (isError) {
    const ERROR_MESSAGE_GROUP = new ChatMessage('system', `**${t('error_message')}**`)
    messageGroups.push([ERROR_MESSAGE_GROUP])
  }

  return (
    <$.Container>
      {isLoading ? (
        <Molecules.LoadingSpinner />
      ) : (
        <>
          {messageGroups.map((messages, index) => {
            return (
              // eslint-disable-next-line react/no-array-index-key
              <$.MessageGroup key={index}>
                {messages.map((message) => (
                  <Molecules.MessageItem key={message.id} message={message} />
                ))}
              </$.MessageGroup>
            )
          })}
          <$.ListEnding ref={ref} />
        </>
      )}
    </$.Container>
  )
}
