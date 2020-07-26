import { pipe, mapAt, writeAndReturn, write } from './utils.js';
import { add } from './math.js'
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

write(isNumber('g'))
write(isNumber('1'))
write(isNumber('2'))
write(isNumber('2'))

write(['1', '2', 'h', '3'].map(isNumber));

const initialScore = x => y => [x, y]
const score = initialScore(0)(0)

const plusOne = add(1)
const mapAtInc = mapAt(plusOne)
const incrementPlayerOne = mapAtInc(0)
const incrementPlayerTwo = mapAtInc(1)

const updateScore = (answer, score) => {
  if(answer === '1') { return incrementPlayerOne(score) }
  return incrementPlayerTwo(score)
}

const main = () => {
  write('Welcome to a game of tennis');
  runGame(score)
}

const runGame = (score) => {
  write(score);
  rl.question('Which player scored? ', (msg) => {
    runGame(updateScore(msg, score));
  });
}

write('Welcome to a game of tennis');
runGame(score);
