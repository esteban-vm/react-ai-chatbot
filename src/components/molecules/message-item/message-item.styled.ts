import tw from 'tailwind-styled-components'

export const Container = tw.div`
  prose
  prose-sm
  w-[90%]
  rounded-xl
  bg-neutral-200
  px-3
  py-1.5
  text-justify
  leading-5
  dark:bg-neutral-800
  dark:prose-invert
  prose-a:text-indigo-500
  prose-a:hover:text-indigo-400
  dark:prose-a:text-sky-500
  dark:prose-a:hover:text-sky-400
  prose-pre:bg-neutral-200
  prose-pre:p-1
  dark:prose-pre:bg-neutral-800
  prose-hr:my-2.5
  prose-hr:border-neutral-100
  dark:prose-hr:border-neutral-900
`
