import { report } from '../report.js'

describe('report', () => {
  it('returns love love from 0, 0', () => {
    expect(report([0, 0])).toEqual("love love")
  })

  it('returns fifteen fifteen from [1, 1]', () => {
    expect(report([1, 1])).toEqual("fifteen fifteen")
  })

  it('returns fifteen thirty from [1, 2]', () => {
    expect(report([1, 2])).toEqual("fifteen thirty")
  })

  it('returns fifteen forty from [1, 3]', () => {
    expect(report([1, 3])).toEqual("fifteen forty")
  })
})