import { cn } from '@ui/utils/shadcn/utils'
import type { FC, PropsWithChildren } from 'react'
import { CalendarContextProvider } from '../../contexts/calendar.context'
import type { CalendarEvent } from '../../types/calendar-event'
import styles from './calendar.module.css'

interface Props {
  selectedDate?: Date
  onSelectedDateChange?: (date: Date) => void
  events?: CalendarEvent[]
  className?: string
  locale?: string
}

export const Calendar: FC<PropsWithChildren<Props>> = props => {
  const { children, className, ...rest } = props

  return (
    <CalendarContextProvider {...rest}>
      <section className={cn(styles.calendar, className)}>{children}</section>
    </CalendarContextProvider>
  )
}
