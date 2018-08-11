console.log('utils.js is running')

const square = (x) => x * x
const add = (a, b) => a + b 
const sub = (a, b) => a - b 


// You can also do this
// export const square = (x) => x * x
export {square, add, sub}