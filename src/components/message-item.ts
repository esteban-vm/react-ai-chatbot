import tw from 'tailwind-styled-components'

export interface MessageItemProps {
  $role: Role
}

export const MessageItem = tw.div<MessageItemProps>`
  ${({ $role }) => ($role === 'user' ? 'self-end bg-neutral-100' : 'self-start')}
  w-[90%]
  rounded-l-lg
  px-3
  py-1.5
  text-pretty
`
