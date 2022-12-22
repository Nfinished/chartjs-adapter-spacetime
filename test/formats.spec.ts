import { adapter, FORMATS } from '../src'

describe('formats', () => {
  it('returns available formats', () => {
    expect(adapter.formats()).toEqual(FORMATS)
  })
})
