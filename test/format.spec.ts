import { adapter } from '../src'

const formats = {
  value: 1559056227321,
  adapter: 'Jan 1, 1970, 6:00:00 AM',
  units: {
    default: '5/28/2019',
    datetime: 'May 28, 2019, 3:10:27 PM',
    millisecond: '3:10:27.321 PM',
    second: '3:10:27 PM',
    minute: '3:10 PM',
    hour: '3 PM',
    day: 'May 28',
    week: 'May 28, 2019',
    month: 'May 2019',
    quarter: 'Q2 - 2019',
    year: '2019',
  },
}

describe('format', () => {
  const { value, units } = formats

  for (const unit of Object.keys(units)) {
    it(`outputs a date in the ${unit} format`, () => {
      expect(adapter.format(value, unit)).toEqual(units[unit])
    })
  }
})
