const game = pipe(
  writeAndReturn,
  incrementPlayerOne,
  writeAndReturn,
  incrementPlayerTwo,
  writeAndReturn,
  incrementPlayerTwo,
  writeAndReturn
)