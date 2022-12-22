import { TimeUnit, _adapters } from 'chart.js'
import Spacetime, { ParsableDate, Diff } from 'spacetime'

export const FORMATS = {
  default: 'M/d/yyyy',
  datetime: 'MMM d, yyyy, h:mm:ss a',
  millisecond: 'h:mm:ss.SSS a',
  second: 'h:mm:ss a',
  minute: 'h:mm a',
  hour: 'h a',
  day: 'MMM d',
  week: 'MMM d, yyyy',
  month: 'MMM yyyy',
  quarter: "'Q'Q '-' yyyy",
  year: 'yyyy',
}

const isKnownFormat = (format: string): format is keyof typeof FORMATS =>
  format in FORMATS

const spacetime = (value: ParsableDate, weekStart?: number) =>
  Spacetime(value, 'UTC', {
    weekStart,
  })

export const adapter = {
  formats: function () {
    return FORMATS
  },

  init: function () {
    // noop
  },

  parse: function (value: ParsableDate) {
    const s = spacetime(value)

    return s.isValid() ? spacetime(s).toNativeDate().getTime() : null
  },

  format: function (time: ParsableDate, format: string) {
    const s = spacetime(time)
    if (isKnownFormat(format)) {
      return s.unixFmt(FORMATS[format])
    } else {
      return s.unixFmt(format)
    }
  },

  add: function (time: ParsableDate, amount: number, unit: TimeUnit) {
    return spacetime(time).add(amount, unit).toNativeDate().getTime()
  },

  diff: function (max: ParsableDate, min: ParsableDate, unit: string) {
    return spacetime(min).diff(spacetime(max))[`${unit}s` as keyof Diff]
  },

  startOf: function (
    time: ParsableDate,
    unit: TimeUnit | 'isoWeek',
    weekStart?: number | boolean,
  ) {
    if (unit === 'isoWeek') {
      const dateTime = spacetime(
        time,
        Math.trunc(Math.min(Math.max(0, Number(weekStart)), 6)) || 0,
      )
      return dateTime.startOf('week').toNativeDate().getTime()
    } else {
      return spacetime(time).startOf(unit).toNativeDate().getTime()
    }
  },

  endOf: function (time: ParsableDate, unit: TimeUnit) {
    return spacetime(time).endOf(unit).toNativeDate().getTime()
  },
}

// Spacetime ParsableDate is a union of Date, number, string, and object.
// It's compatible with the DateAdapter interface, but this is easier than arguing.
_adapters._date.override(adapter)
