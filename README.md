# Functional Tennis Kata

Solution for the `Tennis Kata` using functional javascript. This means writing code that:
- Does not have an mutable state: `var` and `let` are not allowed.
- Only uses recursive looping
- Composes functions to accomplish tasks rather than making specific implementations

`Rules`:
- A game is won by the first player to have won at least four points in total and at least two points more than the opponent.
- The running score of each game is described in a manner peculiar to tennis: scores from zero to three points are described as “love”, “fifteen”, “thirty”, and “forty” respectively.
- If at least three points have been scored by each player, and the scores are equal, the score is “deuce”.
- If at least three points have been scored by each side and a player has one more point than his opponent, the score of the game is “advantage” for the player in the lead.
Changes
- A game will be played interactively.
- All interaction will happen on the console.
- For each point the system will request to have the winner of the point.
- After each point has been submitted the system will display the current score, using the style described on basics.
- Once a player wins, the game should stop and will display the results.
