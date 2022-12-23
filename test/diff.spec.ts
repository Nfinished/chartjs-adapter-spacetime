import { adapter } from '../src'

describe('diff', () => {
  it('correctly diffs two dates', () => {
    const min = '2018-05-28T15:10:27.321Z'
    const max = '2019-05-28T15:10:27.321Z'
    const units = {
      millisecond: 31536000000,
      second: 31536000,
      minute: 525600,
      hour: 8760,
      day: 365,
      week: 52,
      month: 12,
      quarter: 4,
      year: 1,
    }

    for (const unit of Object.keys(units)) {
      const posResult = Math.trunc(adapter.diff(max, min, unit))
      expect(posResult).toEqual(units[unit])
      const negResult = Math.trunc(adapter.diff(min, max, unit))
      expect(negResult).toEqual(-units[unit])
    }
  })
})
