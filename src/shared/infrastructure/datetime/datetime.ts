import dayjs from 'dayjs'
import esLocale from 'dayjs/locale/es'

const localeOptions = {
  ...esLocale,
  formats: {
    ...esLocale.formats,
    L: 'YYYY-MM-DD',
  },
}
dayjs.locale('es', localeOptions)

type ValidDate = string | Date

export type TimeUnit = 'day' | 'week' | 'month' | 'year'

const defaultLocale = 'es'
export class Datetime {
  static getWeekDays(locale: string = defaultLocale): Array<string> {
    const firstDayOfTheWeek = dayjs().locale(locale, { weekStart: 1 }).startOf('week')

    return [...Array(7)].map((_, i) => {
      return firstDayOfTheWeek.add(i, 'day').toDate().toLocaleDateString(locale, { weekday: 'short' })
    })
  }

  static toDateString(dateToFormat: ValidDate): string {
    if (!dateToFormat) return ''

    return dayjs(dateToFormat).locale('es').format('DD MMM YYYY')
  }

  static toDateTimeString(dateToFormat: ValidDate): string {
    if (!dateToFormat) return ''

    return dayjs(dateToFormat).locale('es').format('DD/MM/YYYY HH:mm')
  }

  static toDateIsoString(dateToFormat: ValidDate): string {
    if (!dateToFormat) return ''

    return dayjs(dateToFormat).locale('es').format('YYYY-MM-DD')
  }

  static areSameDay(dateA: ValidDate, dateB: ValidDate): boolean {
    if (!dateA || !dateB) return false

    return dayjs(dateA).isSame(dateB, 'day')
  }

  static firstDayOfMonth(date: Date, locale: string = defaultLocale): Date {
    return dayjs(date).locale(locale, { weekStart: 1 }).startOf('month').startOf('week').toDate()
  }

  static lastDayOfMonth(date: Date, locale: string = defaultLocale): Date {
    return dayjs(date).locale(locale, { weekStart: 1 }).endOf('month').endOf('week').toDate()
  }

  static diff(dateA: Date, dateB: Date, unit: TimeUnit = 'day') {
    return dayjs(dateA).diff(dateB, unit)
  }

  static add(date: Date, amount: number, unit: TimeUnit = 'day') {
    return dayjs(date).add(amount, unit).toDate()
  }

  static substract(date: Date, amount: number, unit: TimeUnit = 'day') {
    return dayjs(date).subtract(amount, unit).toDate()
  }

  static isSame(dateA: Date, dateB: Date, unit: TimeUnit): boolean {
    return dayjs(dateA).isSame(dateB, unit)
  }
}
