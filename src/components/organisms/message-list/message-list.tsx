import { useTranslation } from 'react-i18next'
import { Molecules } from '@/components'
import { useMessageList, useMessageStore } from '@/hooks'
import * as $ from './message-list.styled'

export function MessageList() {
  const { isLoading, messages } = useMessageStore()
  const { t } = useTranslation('translation', { keyPrefix: 'message_list' })

  const { ref, groups } = useMessageList({
    shouldScroll: !isLoading,
    messageList: messages,
  })

  const WELCOME_MESSAGE_GROUP: Message[] = [
    {
      role: 'system',
      content: `**${t('welcome_message')}**`,
    },
  ]

  return (
    <$.Container>
      {isLoading ? (
        <Molecules.LoadingSpinner />
      ) : (
        <>
          {[WELCOME_MESSAGE_GROUP, ...groups].map((messages) => {
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
