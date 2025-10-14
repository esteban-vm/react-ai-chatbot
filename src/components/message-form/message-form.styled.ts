import tw from 'tailwind-styled-components'

export const Container = tw.div`
  flex
  h-16
  w-full
  items-center
  gap-3
`

export const SendButton = tw.button`
  flex
  aspect-square
  h-full
  cursor-pointer
  items-center
  justify-center
  rounded-full
  bg-white
  hover:opacity-95
  active:scale-95
`

export const TextBox = tw.textarea`
  h-full
  grow
  resize-none
  rounded-lg
  bg-white
  p-3
  outline-1
  outline-transparent
  valid:outline-green-300
  invalid:outline-red-300
  focus:outline-neutral-300
`
