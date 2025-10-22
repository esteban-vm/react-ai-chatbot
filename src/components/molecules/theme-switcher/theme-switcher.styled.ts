import tw from 'tailwind-styled-components'

export const ThemeButton = tw.button`
  dark:bg-neutral-90
  aspect-square
  size-7
  cursor-pointer
  rounded-full
  bg-neutral-100
  p-1
  opacity-50
  transition-transform
  hover:opacity-100
  active:scale-95
  md:size-9
  dark:bg-neutral-900
  [&_svg]:size-full
`
