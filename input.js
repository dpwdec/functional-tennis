import { pipe, filter, map } from './utils'
import { range } from './math'

// handles user input
/*
string --> split --> isChar --> join --> toInt --> ceil --> floor --> number
*/
const charCodeRange = range(47)(58) 
const charCode = c => c.charCodeAt(0)
const isNumber = pipe(
  charCode,
  charCodeRange
)

const findNumbers = filter(isNumber)

const splitAt = delimeter => string => string.split(delimeter)

const joinAt = delimeter => string => string.join(delimeter)

const charToInt = x => parseInt(x)

const ceil = max => x => x > max ?  max :  x
const floor = min => x => x < min ? min : x

const formatInput = pipe(
  splitAt(''),
  filter(isNumber),
  joinAt(''),
  charToInt,
  ceil(2),
  floor(1),
)

export { formatInput }

// module.exports = { 
//   inputStringToPlayerChoice: inputStringToPlayerChoice 
// }