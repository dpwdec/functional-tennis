import { pipe, map } from './utils/collectionUtils.js'
import { joinAt } from './utils/stringUtils.js'

const key = ["love", "fifteen", "thirty", "forty"]

const scoreToWord = score => key[score]

const report = pipe(
  map(scoreToWord),
  joinAt(' ')
)

export { report }