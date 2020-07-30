// const { inputStringToPlayerChoice } = require('../input')
import { formatInput } from '../input'

describe('formatInput', () => {
  it('returns 1 when passed player 1', () => {
    expect(formatInput('player 1')).toEqual(1)
  })

  it('returns 2 when passed player 2', () => {
    expect(formatInput('player 2')).toEqual(2)
  })

  it('returns 1 when passed arbitrary0', () => {
    expect(formatInput('arbitrary0')).toEqual(1)
  })

  it('returns 2 when passed 499201', () => {
    expect(formatInput('499201')).toEqual(2)
  })
})