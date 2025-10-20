import tw from 'tailwind-styled-components'

export const IconButton = tw.div`
  size-full
  rounded-4xl
  opacity-55
`

export const LocaleButton = tw.button`
  dark:bg-neutral-90
  aspect-square
  size-10
  cursor-pointer
  rounded-full
  bg-neutral-100
  p-1
  transition-all
  hover:opacity-80
  active:scale-90
  dark:bg-neutral-900
`
