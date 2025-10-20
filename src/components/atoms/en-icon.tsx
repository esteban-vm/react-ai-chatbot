export function ENIcon(props: JSX.IntrinsicElements['svg']) {
  return (
    <svg height={32} viewBox='0 0 32 32' width={32} xmlns='http://www.w3.org/2000/svg' {...props}>
      <rect fill='#071b65' height={24} rx={4} ry={4} width={30} x={1} y={4} />
      <path d='M5.101 4H5a3.992 3.992 0 00-3.933 3.334L26.899 28H27a3.992 3.992 0 003.933-3.334L5.101 4z' fill='#fff' />
      <path
        d='M22.25 19h-2.5l9.934 7.947c.387-.353.704-.777.929-1.257l-8.363-6.691zM1.387 6.309L9.75 13h2.5L2.316 5.053a3.996 3.996 0 00-.929 1.257z'
        fill='#b92932'
      />
      <path d='M5 28h.101L30.933 7.334A3.991 3.991 0 0027 4h-.101L1.067 24.666A3.991 3.991 0 005 28z' fill='#fff' />
      <path d='M13 4H19V28H13z' fill='#fff' />
      <path d='M1 13H31V19H1z' fill='#fff' />
      <path d='M14 4H18V28H14z' fill='#b92932' />
      <path d='M14 1H18V31H14z' fill='#b92932' transform='rotate(90 16 16)' />
      <path
        d='M28.222 4.21L19 11.586V13h.75l9.943-7.94a3.98 3.98 0 00-1.471-.85zM2.328 26.957a3.98 3.98 0 001.447.832L13 20.409v-1.408h-.75l-9.922 7.956z'
        fill='#b92932'
      />
      <path
        d='M27 4H5a4 4 0 00-4 4v16a4 4 0 004 4h22a4 4 0 004-4V8a4 4 0 00-4-4zm3 20c0 1.654-1.346 3-3 3H5c-1.654 0-3-1.346-3-3V8c0-1.654 1.346-3 3-3h22c1.654 0 3 1.346 3 3v16z'
        opacity={0.15}
      />
      <path d='M27 5H5a3 3 0 00-3 3v1a3 3 0 013-3h22a3 3 0 013 3V8a3 3 0 00-3-3z' fill='#fff' opacity={0.2} />
    </svg>
  )
}
