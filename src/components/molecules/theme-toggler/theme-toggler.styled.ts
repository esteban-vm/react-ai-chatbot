import tw from 'tailwind-styled-components'

export const ButtonGroup = tw.div`
  w-fit
  space-x-2
  rounded-full
  border
  border-neutral-300
  px-2
  py-1
  dark:border-neutral-700
`

export const Container = tw.div`
  -mb-5
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
  size-9
  cursor-pointer
  rounded-full
  bg-neutral-100
  p-1
  dark:bg-neutral-900
`
