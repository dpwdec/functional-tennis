// const { inputStringToPlayerChoice } = require('../input')
import { formatInput } from '../input'

describe('formatInput', () => {
  it('returns 1 when passed  player 1', () => {
    expect(formatInput('player 1')).toEqual(1)
  })
})