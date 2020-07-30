const add = x => y => y + x

const range = min => max => value => value < max && value > min

const ceil = max => x => x > max ?  max :  x

const floor = min => x => x < min ? min : x

export { add, range, ceil, floor };