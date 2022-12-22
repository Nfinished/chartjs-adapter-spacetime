import { adapter } from '../src'

describe('parse', () => {
  it('should correctly parse using different types of value', function () {
    const inputValues = {
      utc: 1559056227321,
      jsDate: new Date(1559056227321),
      jsISODate: new Date('2019-05-28T15:10:27.321Z'),
      spacetimeObject: {
        year: 2019,
        month: 4,
        date: 28,
        hour: 15,
        minute: 10,
        second: 27,
        millisecond: 321,
      },
      spacetimeArray: [2019, 4, 28, 15, 10, 27, 321],
    }
    for (const key of Object.keys(inputValues)) {
      expect(adapter.parse(inputValues[key])).toEqual(1559056227321)
    }
  })

  it("rejects dates that don't exist", () => {
    expect(adapter.parse('2019-02-29')).toBeNull()
  })
})
