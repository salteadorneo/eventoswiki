import { cn } from '@ui/utils/shadcn/utils'
import type { FC, PropsWithChildren } from 'react'
import './heading.css'

interface Props extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: any
}
export const Heading: FC<PropsWithChildren<Props>> = props => {
  const { children, as, className, ...rest } = props

  const Comp = as || 'h2'
  return (
    <Comp className={cn('heading', className)} {...rest}>
      {children}
    </Comp>
  )
}
