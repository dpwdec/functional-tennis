const splitAt = delimeter => string => string.split(delimeter)

const joinAt = delimeter => string => string.join(delimeter)

const charToInt = x => parseInt(x)

const charCode = c => c.charCodeAt(0)

export { splitAt, joinAt, charToInt, charCode}