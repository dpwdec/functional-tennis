import { pipe, mapAt, writeAndReturn, write } from './utils.js';
import { add } from './math.js'
import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const initialScore = x => y => [x, y]
const score = initialScore(0)(0)

const plusOne = add(1)
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
