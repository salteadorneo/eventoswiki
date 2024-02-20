import { Button } from '@ui/components/common/button/button.component'
import { IconButton } from '@ui/components/common/button/icon-button.component'
import { Card } from '@ui/components/common/card/card.component'
import { CaretLeft, CaretRight } from '@ui/icons'
import type { FC } from 'react'
import { useCalendar } from '../../contexts/calendar.context'

interface CalendarControlsProps {}
export const CalendarControls: FC<CalendarControlsProps> = () => {
  const { nextDate, prevDate, selectToday } = useCalendar()

  return (
    <Card className="flex items-center">
      <IconButton variant="ghost" onClick={() => prevDate('month')}>
        <CaretLeft />
      </IconButton>
      <Button variant="ghost" onClick={selectToday}>
        Hoy
      </Button>
      <IconButton variant="ghost" onClick={() => nextDate('month')}>
        <CaretRight />
      </IconButton>
    </Card>
  )
}
