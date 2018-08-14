// arguments object

const add = (a, b) => {
    return a + b;
};

console.log(add(55, 1));

const user = {
    name: 'Kyle',
    cities: ['Sweden', 'Canada', 'Denmark'],
    // printPlacesLived: function() {
    //     return this.cities.map((city) => this.name + ' wants to live in ' + city)
    // }
    printPlacesLived() {
        return this.cities.map((city) => this.name + ' wants to live in ' + city)
    }
};

console.log(user.printPlacesLived());

const multiplier = {
    numbers: [2, 4, 1, 8],
    multiplyBy: 2,
    multiply() {
        return this.numbers.map((number) => number * this.multiplyBy)
    }
}

console.log(multiplier.multiply())