import tw from 'tailwind-styled-components'

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

export const ButtonGroup = tw.div`
  w-fit
  space-x-2
  rounded-full
  border
  border-green-500
  px-3
  py-1.5
`

export const Container = tw.header` `

export const ThemeButton = tw.button`
  dark:bg-neutral-90
  aspect-square
  size-8
  cursor-pointer
  rounded-full
  bg-neutral-100
  p-1
  dark:bg-neutral-900
  [&:svg]:size-full
`
