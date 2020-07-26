const write = msg => console.log(msg)

const writeAndReturn = msg => { 
  write(msg);
  return msg;
}

const pipe = (...fns) => (x) => fns.reduce((v, f) => f(v), x)

export { pipe, write, writeAndReturn };