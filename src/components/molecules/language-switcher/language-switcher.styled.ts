import tw from 'tailwind-styled-components'

export const IconButton = tw.div`
  size-full
  rounded-4xl
`

export const LanguageButton = tw.button`
  dark:bg-neutral-90
  aspect-square
  size-10
  cursor-pointer
  rounded-full
  bg-neutral-100
  p-1
  opacity-50
  transition-transform
  hover:opacity-100
  active:scale-95
  dark:bg-neutral-900
`
