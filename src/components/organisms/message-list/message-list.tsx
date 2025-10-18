import { Molecules } from '@/components'
import { useMessageList, useMessageStore } from '@/hooks'
import { MOCK_MESSAGE_GROUPS, WELCOME_MESSAGE_GROUP } from '@/utils'
import * as $ from './message-list.styled'

export function MessageList() {
  const { isLoading, messages } = useMessageStore()

  const { ref, groups } = useMessageList({
    shouldScroll: !isLoading,
    messageList: messages,
  })

  return (
    <$.Container>
      {isLoading ? (
        <Molecules.LoadingSpinner />
      ) : (
        <>
          {[WELCOME_MESSAGE_GROUP, ...MOCK_MESSAGE_GROUPS, ...groups].map((messages) => {
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
