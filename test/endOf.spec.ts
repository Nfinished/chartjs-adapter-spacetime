import { TimeUnit } from 'chart.js'
import adapter from '../src/adapter'

describe('endOf', function () {
  const date = '2019-05-28T15:10:27.321Z'
  const units = {
    millisecond: date,
    second: '2019-05-28T15:10:27.999Z',
    minute: '2019-05-28T15:10:59.999Z',
    hour: '2019-05-28T15:59:59.999Z',
    day: '2019-05-28T23:59:59.999Z',
    week: '2019-06-02T23:59:59.999Z',
    month: '2019-05-31T23:59:59.999Z',
    quarter: '2019-06-30T23:59:59.999Z',
    year: '2019-12-31T23:59:59.999Z',
  }

  // const utcStart = DateTime.fromISO(date).valueOf();

  // const options = {zone: 'UTC', locale: 'en-GB'};
  // const adapter = new Chart._adapters._date(options);

  it('should correctly calculate the end of the period for specific unit', function () {
    for (const unit of Object.keys(units)) {
      const result = adapter.endOf(date, unit as TimeUnit)
      expect(result).toEqual(adapter.parse(units[unit]))
    }
  })
})
