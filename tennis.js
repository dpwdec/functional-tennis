import { pipe, writeAndReturn, write } from './utils.js';
import { add } from './math.js'
import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const initialScore = x => y => [x, y]
const score = initialScore(0)(0)

const plusOne = add(1)

/**
 * A function that takes:
 * A mappable object
 * A target index to map at
 * A function to be applied to the object at the target index
 */
const mapAt = fn => target => mappable => mappable.map((value, index) => index === target ? fn(value) : value)

const mapAtInc = mapAt(plusOne)
const incrementPlayerOne = mapAtInc(0)
const incrementPlayerTwo = mapAtInc(1)

const game = pipe(
  writeAndReturn,
  incrementPlayerOne,
  writeAndReturn,
  incrementPlayerTwo,
  writeAndReturn,
  incrementPlayerTwo,
  writeAndReturn
)

//game(score);

const updateScore = (answer, score) => {
  if(answer === '🏁') { return score }
  if(answer === '1') { return incrementPlayerOne(score) }
  return incrementPlayerTwo(score)
}

const runGame = (answer, score) => {
  const updatedScore = updateScore(answer, score)
  write(updatedScore);
  rl.question('Which player scored? ', (msg) => {
    runGame(msg, updatedScore);
  });
}

runGame('🏁', score);
