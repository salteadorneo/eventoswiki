import { cn } from '@ui/utils/shadcn/utils'
import type { FC, PropsWithChildren } from 'react'
import { Button } from './button.component'

interface Props {
  href: string
  selected?: boolean
  className?: string
}
export const Link: FC<PropsWithChildren<Props>> = props => {
  const { href, className, children, selected = false } = props

  return (
    <Button variant="ghost" asChild>
      <a className={cn({ 'text-primary': selected }, className)} href={href}>
        {children}
      </a>
    </Button>
  )
}
