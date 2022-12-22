import adapter, { FORMATS } from '../src/adapter'

describe('formats', () => {
  it('returns available formats', () => {
    expect(adapter.formats()).toEqual(FORMATS)
  })
})
