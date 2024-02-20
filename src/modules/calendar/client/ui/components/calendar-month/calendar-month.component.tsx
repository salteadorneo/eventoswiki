import { Datetime } from '@/shared/infrastructure/datetime/datetime'
import { cn } from '@ui/utils/shadcn/utils'
import { useMemo, type FC } from 'react'
import { useCalendar } from '../../contexts/calendar.context'
import styles from './calendar-month.module.css'

interface CalendarMonthProps {
  showDays?: boolean
}
export const CalendarMonth: FC<CalendarMonthProps> = props => {
  const { showDays = false } = props
  const { selectedDate, locale } = useCalendar()

  const weekDays = useMemo(() => {
    return Datetime.getWeekDays(locale)
  }, [])

  const monthDays = useMemo<Array<Date>>(() => {
    const firstDay = Datetime.firstDayOfMonth(selectedDate, locale)
    const lastDay = Datetime.lastDayOfMonth(selectedDate, locale)
    const differenceDays = Datetime.diff(lastDay, firstDay) + 1

    const days = [...Array(differenceDays)].map((_, i) => {
      return Datetime.add(firstDay, i)
    })

    return days
  }, [selectedDate])

  return (
    <section className={cn(styles['calendar-month'])}>
      {showDays && (
        <div className={cn(styles['days'])}>
          {weekDays.map(day => (
            <span key={day} className={cn(styles['weekday'])}>
              {day}
            </span>
          ))}
        </div>
      )}
      <div className={cn(styles['month-grid'])}>
        {monthDays.map(day => (
          <div
            key={Datetime.toDateIsoString(day)}
            className={cn(styles['day-cell'], {
              [styles['other-month-cell']]: !Datetime.isSame(day, selectedDate, 'month'),
            })}
          >
            <div>
              <time
                dateTime={Datetime.toDateIsoString(day)}
                className={cn(styles['day'], {
                  [styles['today']]: Datetime.areSameDay(day, new Date()),
                })}
              >
                {day.getDate()}
              </time>
            </div>
            <div></div>
          </div>
        ))}
      </div>
    </section>
  )
}
