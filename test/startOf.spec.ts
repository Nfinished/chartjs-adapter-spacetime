import { TimeUnit } from 'chart.js'
import spacetime from 'spacetime'
import { adapter } from '../src'

describe('startof', function () {
  const date = '2019-05-28T15:10:27.321Z'
  const units = {
    millisecond: date,
    second: '2019-05-28T15:10:27.000Z',
    minute: '2019-05-28T15:10:00.000Z',
    hour: '2019-05-28T15:00:00.000Z',
    day: '2019-05-28T00:00:00.000Z',
    week: '2019-05-27T00:00:00.000Z',
    month: '2019-05-01T00:00:00.000Z',
    quarter: '2019-04-01T00:00:00.000Z',
    year: '2019-01-01T00:00:00.000Z',
  }

  it('should correctly calculate the start of start the period for specific unit', function () {
    for (const unit of Object.keys(units)) {
      const result = adapter.startOf(date, unit as TimeUnit)
      expect(result).toEqual(adapter.parse(units[unit]))
    }
  })

  it('should startOf correctly using isoWeek preset', function () {
    const dayOfWeekNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    const daysInMonth = spacetime().daysInMonth()

    for (const dayOfWeek of dayOfWeekNames) {
      for (let dayOfMonth = 1; dayOfMonth <= daysInMonth; dayOfMonth++) {
        const dt = spacetime({ date: dayOfMonth, hour: 8, minute: 30 })

        const startOf = adapter.startOf(
          dt,
          'isoWeek',
          dayOfWeekNames.indexOf(dayOfWeek),
        )

        expect(spacetime(startOf).format('day-short')).toEqual(dayOfWeek)
        expect(adapter.parse(startOf)).toBeLessThanOrEqual(
          adapter.parse(dt) || 0,
        )
      }
    }

    for (let dayOfMonth = 1; dayOfMonth <= daysInMonth; dayOfMonth++) {
      const dt = spacetime({ date: dayOfMonth, hour: 8, minute: 30 })

      const startOf = adapter.startOf(dt, 'isoWeek', false)
      expect(spacetime(startOf).format('day-short')).toEqual('Sun')
      expect(adapter.parse(startOf)).toBeLessThanOrEqual(adapter.parse(dt) || 0)
    }

    for (let dayOfMonth = 1; dayOfMonth <= daysInMonth; dayOfMonth++) {
      const dt = spacetime({ date: dayOfMonth, hour: 8, minute: 30 })

      const startOf = adapter.startOf(dt, 'isoWeek', true)
      expect(spacetime(startOf).format('day-short')).toEqual('Mon')
      expect(adapter.parse(startOf)).toBeLessThanOrEqual(adapter.parse(dt) || 0)
    }

    for (let dayOfMonth = 1; dayOfMonth <= daysInMonth; dayOfMonth++) {
      const dt = spacetime({ date: dayOfMonth, hour: 8, minute: 30 })

      const startOf = adapter.startOf(dt, 'isoWeek', 100)
      expect(spacetime(startOf).format('day-short')).toEqual('Sat')
      expect(adapter.parse(startOf)).toBeLessThanOrEqual(adapter.parse(dt) || 0)
    }

    for (let dayOfMonth = 1; dayOfMonth <= daysInMonth; dayOfMonth++) {
      const dt = spacetime({ date: dayOfMonth, hour: 8, minute: 30 })

      const startOf = adapter.startOf(dt, 'isoWeek', -100)
      expect(spacetime(startOf).format('day-short')).toEqual('Sun')
      expect(adapter.parse(startOf)).toBeLessThanOrEqual(adapter.parse(dt) || 0)
    }
  })

  it('should use correct date for startOf isoWeek when date is beginning of week', function () {
    const daysInMonth = spacetime().daysInMonth()

    for (let dayOfMonth = 1; dayOfMonth <= daysInMonth; dayOfMonth++) {
      const dt = spacetime({ date: dayOfMonth, hour: 8, minute: 30 })
      const dayOfWeek = dt.day() % 7
      const startOf = adapter.startOf(dt, 'isoWeek', dayOfWeek)
      expect(adapter.format(startOf, 'e')).toEqual(dt.unixFmt('e'))
    }
  })
})
