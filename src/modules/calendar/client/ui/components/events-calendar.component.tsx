import { useState } from 'react'
import { CalendarControls } from './calendar-controls/calendar-controls.component'
import { CalendarHeader } from './calendar-header/calendar-header.component'
import { CalendarMonth } from './calendar-month/calendar-month.component'
import { Calendar } from './calendar/calendar.component'

export const EventsCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date())

  return (
    <Calendar
      locale="es"
      selectedDate={selectedDate}
      onSelectedDateChange={(newDate: Date) => {
        setSelectedDate(newDate)
      }}
    >
      <CalendarHeader>
        <CalendarControls />
      </CalendarHeader>
      <CalendarMonth showDays />
    </Calendar>
  )
}
