// var allows redefinition and value to be updated
var nameVar = 'Kyle';
nameVar = 'Steve';
var nameVar = 'Mike';
console.log('nameVar', nameVar)

// let does NOT allow redefinition but does allow value to be updated
let nameLet = 'Lucy';
nameLet = 'Rory';
// let nameLet = 'Mike';
console.log('nameLet', nameLet)

// const does NOT allow redefinition or the value to be updated
const nameConst = 'Dave';
// let nameConst = 'Corkey';
// const nameConst = 'Feli';
console.log('nameLet', nameLet)

// Block Scoping - (const and let are block level scoped)
//      This means that you can define a var in a block of code, 
//      and it will still be accessible outside of that block. (Ew.)
const fullName = 'Kyle Barth';
let firstName;

if (fullName) {
    firstName = fullName.split(' ')[0];
    console.log(firstName);
}

console.log(firstName);