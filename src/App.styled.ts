import tw from 'tailwind-styled-components'

export interface MessageItemProps {
  $role: Role
}

export const AppLogo = tw.img`
  mx-auto
  size-16
  select-none
`

export const AppTitle = tw.h1`
  text-center
  text-3xl
  font-semibold
`

export const Container = tw.main`
  my-3
  flex
  size-full
  min-h-96
  max-w-xl
  flex-col
  gap-3
  rounded-xl
  p-3
  shadow-lg
`

export const MessageItem = tw.div<MessageItemProps>`
  ${({ $role }) => ($role === 'user' ? 'self-end bg-neutral-100' : 'self-start')}
  w-[90%]
  rounded-l-lg
  px-3
  py-1.5
  text-pretty
`

export const MessageList = tw.div`
  flex
  grow
  flex-col
  gap-1
  overflow-y-auto
  rounded-xl
  bg-white
`
