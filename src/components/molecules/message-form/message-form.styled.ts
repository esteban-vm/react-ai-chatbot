import { SendHorizontal } from 'lucide-react'
import tw from 'tailwind-styled-components'

export const Container = tw.form`
  flex
  w-full
  items-center
  gap-3
`

export const SendButton = tw.button`
  flex
  aspect-square
  size-16
  cursor-pointer
  items-center
  justify-center
  rounded-full
  bg-white
  transition-all
  enabled:active:scale-95
  disabled:cursor-not-allowed
  disabled:opacity-80
`

export const SendIcon = tw(SendHorizontal)`
  size-3/5
  stroke-neutral-300
`

export const TextBox = tw.textarea`
  grow
  resize-none
  rounded-xl
  bg-white
  p-3
  text-sm
  outline-1
  outline-transparent
  placeholder:italic
  valid:outline-green-300
  invalid:outline-red-300
  focus:outline-neutral-300
  disabled:cursor-not-allowed
  disabled:opacity-80
`
