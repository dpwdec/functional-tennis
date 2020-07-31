import { report } from '../report.js'

describe('report', () => {
  it('returns love love from 0, 0', () => {
    expect(report([0, 0])).toEqual("love love")
  })
})