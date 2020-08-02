import { pipe, map, every } from './utils/collectionUtils.js'
import { joinAt } from './utils/stringUtils.js'

const key = ["love", "fifteen", "thirty", "forty"]

const scoreToWord = score => key[score]

const checkScoreLimit = every(x => x > 3)
const checkEqual = every((x, index, array) => x === array[0])

const report = score => {
  if(checkScoreLimit(score)) {
    if(checkEqual(score)) {
      return "deuce"
    } else{
      // find player with largest score and report it
    }
  } else {
    reportRegular(score)
  }
}

const reportRegular = pipe(
  map(scoreToWord),
  joinAt(' ')
)

// IF score[0] > 3 and score[1] > 3
//    IF equal:
//      DEUCE
//    ELSE:
//      Player with greater sore is advantage.

export { report }