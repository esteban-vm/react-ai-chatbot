import tw from 'tailwind-styled-components'

export const Container = tw.div`
  relative
  flex
  grow
  flex-col
  overflow-y-auto
  rounded-xl
  border
  border-neutral-300
  bg-neutral-100
  p-0.5
  dark:border-neutral-700
  dark:bg-neutral-900
`

export const MessageGroup = tw.article`
  flex
  flex-col
  gap-1
  p-0.5
`
