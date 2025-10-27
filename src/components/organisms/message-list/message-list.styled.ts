import tw from 'tailwind-styled-components'

export const Container = tw.div`
  relative
  flex
  grow
  flex-col
  gap-1
  overflow-y-auto
  rounded-xl
  bg-neutral-100
  p-1
  dark:bg-neutral-900
`

export const ListEnding = tw.span`
  invisible
  size-0
`

export const MessageGroup = tw.div`
  flex
  flex-col
  gap-1
  last-of-type:min-h-[calc(100%-theme(spacing.2))]
`
