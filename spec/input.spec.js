// const { inputStringToPlayerChoice } = require('../input')
import { formatInput } from '../input'

describe('formatInput', () => {
  it('returns 1 when passed player 1', () => {
    expect(formatInput('player 1')).toEqual(1)
  })

  it('returns 2 when passed player 2', () => {
    expect(formatInput('player 2')).toEqual(2)
  })
})