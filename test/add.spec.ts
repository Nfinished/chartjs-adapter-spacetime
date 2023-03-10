import { TimeUnit } from 'chart.js'
import { adapter } from '../src'

describe('add', () => {
  const baseValue = '2019-05-28T15:10:27.321Z'
  const amount = 1
  const units = {
    millisecond: '2019-05-28T15:10:27.322Z',
    second: '2019-05-28T15:10:28.321Z',
    minute: '2019-05-28T15:11:27.321Z',
    hour: '2019-05-28T16:10:27.321Z',
    day: '2019-05-29T15:10:27.321Z',
    week: '2019-06-04T15:10:27.321Z',
    month: '2019-06-28T15:10:27.321Z',
    quarter: '2019-08-28T15:10:27.321Z',
    year: '2020-05-28T15:10:27.321Z',
  }

  it(`adds one given unit of time to a base value`, () => {
    for (const unit of Object.keys(units)) {
      const result = adapter.add(baseValue, amount, unit as TimeUnit)
      expect(result).toEqual(adapter.parse(units[unit]))
    }
  })
})
