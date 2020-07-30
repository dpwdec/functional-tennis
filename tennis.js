import { pipe, mapAt, writeAndReturn, write } from './utils/collectionUtils.js';
import { add } from './math.js'
import { formatInput } from './input.js'
import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// compose a function that asserts if a character is a number i.e. of charcode 48-57
const range = min => max => value => value < max && value > min
const charCodeRange = range(47)(58) 
const charCode = c => c.charCodeAt(0)
const isNumber = pipe(
  charCode,
  charCodeRange
)

// write(isNumber('g'))
// write(isNumber('1'))
// write(isNumber('2'))
// write(isNumber('2'))

// write(['1', '2', 'h', '3'].map(isNumber));
// write(['1', '2', 'h', '3'].filter(isNumber));

const ceil = max => x => x > max ?  max :  x
const floor = min => x => x < min ? min : x

const ceilTo2 = ceil(2);
const floorTo1 = floor(1);
const charToInt = x => parseInt(x)

const numArray = ['0', '7', 'h', '3'].filter(isNumber).map(charToInt)

// why does this error if I just pass in the function directly?
// const fullNumArray = numArray.map(parseInt) // => fails
//const fullNumArray = numArray.map(charToInt)

const limitToRange = pipe(
  ceilTo2,
  floorTo1
)

write(limitToRange(numArray).map(ceilTo2).map(floorTo1))

// const makeInput = pipe(
//   ['0', '7', 'h', '3'].filter(isNumber).map(parseInt),
//   writeAndReturn,
//   ceilTo2,
//   floorTo1
// )

// write(
//   makeInput()
// )

const initialScore = x => y => [x, y]
const score = initialScore(0)(0)

const plusOne = add(1)
const mapAtInc = mapAt(plusOne)
const incrementPlayerOne = mapAtInc(0)
const incrementPlayerTwo = mapAtInc(1)

const updateScore = (answer, score) => {
  if(formatInput(answer) === 1) { return incrementPlayerOne(score) }
  return incrementPlayerTwo(score)
}

const runGame = (score) => {
  write(score);
  rl.question('Which player scored? ', (msg) => {
    runGame(updateScore(msg, score));
  });
}

write('Welcome to a game of tennis');
runGame(score);
