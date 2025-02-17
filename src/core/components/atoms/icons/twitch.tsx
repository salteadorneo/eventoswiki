import type { FC } from 'react'
import type { Icon } from './icon'

export const Twitch: FC<Icon> = (props) => {
  const { size, color } = props
  return (
    <svg
      className='w-6 h-6 stroke-[#6441a5]'
      viewBox='0 0 24 24'
      strokeWidth='1.5'
      fill='none'
      strokeLinecap='round'
      strokeLinejoin='round'
      style={{
        width: size,
        height: size,
        stroke: color,
      }}
    >
      <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
      <path d='M4 5v11a1 1 0 0 0 1 1h2v4l4 -4h5.584c.266 0 .52 -.105 .707 -.293l2.415 -2.414c.187 -.188 .293 -.442 .293 -.708v-8.585a1 1 0 0 0 -1 -1h-14a1 1 0 0 0 -1 1z'></path>
      <line x1='16' y1='8' x2='16' y2='12'></line>
      <line x1='12' y1='8' x2='12' y2='12'></line>
    </svg>
  )
}
