import { useTranslation } from 'react-i18next'
import { Molecules } from '@/components'
import { useMessageList, useMessageStore } from '@/hooks'
import * as $ from './message-list.styled'

export function MessageList() {
  const { isLoading, isError, messages } = useMessageStore()
  const { t } = useTranslation('translation', { keyPrefix: 'message_list' })
  const { ref, groups } = useMessageList({ messages, shouldScroll: !isLoading })

  const WELCOME_MESSAGE_GROUP: Message[] = [
    {
      role: 'system',
      content: `**${t('welcome_message')}**`,
    },
  ]

  const messageGroups: Message[][] = [WELCOME_MESSAGE_GROUP, ...groups]

  if (isError) {
    const ERROR_MESSAGE_GROUP: Message[] = [
      {
        role: 'system',
        content: `**${t('error_message')}**`,
      },
    ]

    messageGroups.push(ERROR_MESSAGE_GROUP)
  }

  return (
    <$.Container>
      {isLoading ? (
        <Molecules.LoadingSpinner />
      ) : (
        <>
          {messageGroups.map((messages) => {
            return (
              <$.MessageGroup key={crypto.randomUUID()}>
                {messages.map((message) => (
                  <Molecules.MessageItem key={crypto.randomUUID()} {...message} />
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
