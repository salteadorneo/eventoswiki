import { Datetime, type TimeUnit } from '@/shared/infrastructure/datetime/datetime'
import { createContext, useContext, type FC, type PropsWithChildren } from 'react'
import type { CalendarEvent } from '../types/calendar-event'

interface CalendarContextProps {
  selectedDate: Date
  onSelectedDateChange?: (date: Date) => void
  events?: CalendarEvent[]
  locale?: string
  nextDate: (unit: TimeUnit) => void
  prevDate: (unit: TimeUnit) => void
  selectToday: () => void
}
export const CalendarContext = createContext<CalendarContextProps>({
  selectedDate: new Date(),
  events: [],
  nextDate: () => {},
  prevDate: () => {},
  selectToday: () => {},
})
CalendarContext.displayName = 'CalendarContext'

interface CalendarContextProviderProps {
  selectedDate?: Date
  onSelectedDateChange?: (date: Date) => void
  events?: CalendarEvent[]
  locale?: string
}

export const CalendarContextProvider: FC<PropsWithChildren<CalendarContextProviderProps>> = props => {
  const { selectedDate = new Date(), onSelectedDateChange = () => {}, events, locale, children } = props

  const nextDate = (unit: TimeUnit) => {
    const newDate = Datetime.add(selectedDate, 1, unit)
    onSelectedDateChange(newDate)
  }

  const prevDate = (unit: TimeUnit) => {
    const newDate = Datetime.substract(selectedDate, 1, unit)
    onSelectedDateChange(newDate)
  }

  const selectToday = () => {
    onSelectedDateChange(new Date())
  }

  return (
    <CalendarContext.Provider value={{ selectedDate, events, locale, nextDate, prevDate, selectToday }}>
      {children}
    </CalendarContext.Provider>
  )
}

export const useCalendar = () => useContext(CalendarContext)
