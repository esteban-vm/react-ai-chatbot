import tw from 'tailwind-styled-components'

export const Container = tw.fieldset`
  flex
  w-full
  items-center
  gap-3
`

export const ErrorFeedback = tw.small`
  mx-3
  text-xs
  text-red-700
  dark:text-red-300
`

export const FormControl = tw.div`
  flex
  grow
  flex-col
  gap-0.5
`

export const IconButton = tw.div`
  size-3/5
  stroke-neutral-300
  dark:stroke-neutral-700
`

export const SendButton = tw.button`
  flex
  aspect-square
  size-14
  cursor-pointer
  items-center
  justify-center
  rounded-full
  bg-neutral-100
  transition-all
  enabled:active:scale-95
  disabled:cursor-not-allowed
  disabled:opacity-80
  md:size-16
  dark:bg-neutral-900
`

export const TextBox = tw.textarea`
  w-full
  resize-none
  rounded-xl
  bg-neutral-100
  p-2
  text-sm
  outline
  outline-transparent
  placeholder:italic
  valid:outline-green-300
  invalid:outline-red-300
  focus:outline-neutral-300
  disabled:cursor-not-allowed
  disabled:opacity-80
  md:p-3
  dark:bg-neutral-900
  dark:valid:outline-green-700
  dark:invalid:outline-red-700
  dark:focus:outline-neutral-700
`
