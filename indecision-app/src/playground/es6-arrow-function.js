// es5
// const square = function (x) {
//     return x*x;
// };

// es6
// const squareArrow = (x) => {
//     return x*x;
// };
// same as...
// const squareArrow = (x) => x*x;

const fullName = 'Kyle Barth';
const getFirstName = (fullName) => fullName.split(' ')[0];

console.log(getFirstName(fullName));