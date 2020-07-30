import { pipe, filter, map } from './utils'

// handles user input
/*
string --> split --> isChar --> join --> toInt --> ceil --> floor --> number
*/
const range = min => max => value => value < max && value > min
const charCodeRange = range(47)(58) 
const charCode = c => c.charCodeAt(0)
const isNumber = pipe(
  charCode,
  charCodeRange
)

const findNumbers = filter(isNumber)

const splitAt = delimeter => string => string.split(delimeter)
const splitAtChar = splitAt('')

const joinAt = delimeter => string => string.join(delimeter)
const joinAtChar = joinAt('')

const charToInt = x => parseInt(x)
const mapCharsToInts = map(charToInt)

const ceil = max => x => x > max ?  max :  x
const floor = min => x => x < min ? min : x

const ceilTo2 = ceil(2);
const floorTo1 = floor(1);

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