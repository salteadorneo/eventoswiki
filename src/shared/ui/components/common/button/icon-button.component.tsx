import { forwardRef } from 'react'
import { Button, type ButtonProps } from './button.component'

type Props = ButtonProps

const IconButton = forwardRef<HTMLButtonElement, Props>((props, ref) => {
  return <Button size="icon" variant="ghost" ref={ref} {...props} />
})
IconButton.displayName = 'IconButton'

export { IconButton }
