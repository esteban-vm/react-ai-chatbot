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

export const Container = tw.main`
  my-3
  flex
  size-full
  min-h-96
  max-w-xl
  flex-col
  gap-3
  rounded-xl
  bg-neutral-200
  p-3
  shadow-lg
  dark:bg-neutral-800
`
