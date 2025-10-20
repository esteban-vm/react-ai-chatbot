import tw from 'tailwind-styled-components'

export const ButtonGroup = tw.div`
  w-fit
  space-x-2
  rounded-full
  border
  border-neutral-300
  px-3
  py-1.5
  dark:border-neutral-700
`

export const Container = tw.div`
  flex
  w-full
  justify-end
`

export const IconButton = tw.div`
  size-full
  stroke-neutral-300
  hover:opacity-80
  dark:stroke-neutral-700
`

export const ThemeButton = tw.button`
  dark:bg-neutral-90
  aspect-square
  size-8
  cursor-pointer
  rounded-full
  bg-neutral-100
  p-1
  dark:bg-neutral-900
`
