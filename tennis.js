import { pipe, mapAt, writeAndReturn, write } from './utils/collectionUtils.js';
import { add } from './utils/math.js'
import { formatInput } from './input.js'
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
