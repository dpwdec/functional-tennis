const write = msg => console.log(msg)

const writeAndReturn = msg => { 
  write(msg);
  return msg;
}

const pipe = (...fns) => (x) => fns.reduce((v, f) => f(v), x)

/**
 * A function that takes:
 * A mappable object
 * A target index to map at
 * A function to be applied to the object at the target index
 */
const mapAt = fn => target => mappable => mappable.map((value, index) => index === target ? fn(value) : value)

export { pipe, mapAt, write, writeAndReturn };