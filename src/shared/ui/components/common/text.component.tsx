import { cn } from '@ui/utils/shadcn/utils'
import type { FC, PropsWithChildren } from 'react'
import styles from './text.module.css'

interface Props extends React.HTMLAttributes<HTMLParagraphElement> {}

export const Text: FC<PropsWithChildren<Props>> = props => {
  const { children, className, ...rest } = props
  const classes = cn(styles.text, { className })

  return (
    <p className={classes} {...rest}>
      {children}
    </p>
  )
}
