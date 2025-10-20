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
  size-fit
  space-x-2
  rounded-full
  border
  border-neutral-300
  px-2
  py-1
  dark:border-neutral-700
`

export const ButtonGroupContainer = tw.div`
  -mb-5
  flex
  w-full
  items-center
  justify-between
`
