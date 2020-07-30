import { pipe, filter } from './utils/collectionUtils.js'
import { charCode, charToInt, joinAt, splitAt } from './utils/stringUtils.js'
import { range, floor, ceil } from './utils/math.js'

const _isNumber = pipe(
  charCode,
  range(47)(58)
)


/*
string --> split --> isChar --> join --> toInt --> ceil --> floor --> number
*/
const formatInput = pipe(
  splitAt(''),
  filter(_isNumber),
  joinAt(''),
  charToInt,
  ceil(2),
  floor(1),
)

export { formatInput }