const isAdult = (age) => age >= 18
const canDrink = (age) => age >= 18
const isSeniorCitizen = (age) => age >= 65 // exported as default, so name doesn't matter in app.js 

export {isAdult, canDrink, isSeniorCitizen as default}