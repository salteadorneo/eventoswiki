import { Heading } from '@ui/components/common/typography/heading.component'
import { cn } from '@ui/utils/shadcn/utils'
import { useMemo, type FC, type PropsWithChildren } from 'react'
import { useCalendar } from '../../contexts/calendar.context'
import styles from './calendar-header.module.css'

interface CalendarHeaderProps {
  showDay?: boolean
}
export const CalendarHeader: FC<PropsWithChildren<CalendarHeaderProps>> = props => {
  const { showDay = false, children } = props
  const { selectedDate, locale } = useCalendar()

  const headerDate = useMemo(() => {
    return selectedDate?.toLocaleDateString(locale, {
      day: showDay ? 'numeric' : undefined,
      month: 'long',
      year: 'numeric',
    })
  }, [locale, selectedDate])

  return (
    <header className={cn(styles['calendar-header'])}>
      <Heading as="h1" className={cn(styles['selected-date'])}>
        <time dateTime={selectedDate.toLocaleDateString()}>{headerDate}</time>
      </Heading>
      <section>{children}</section>
    </header>
  )
}
