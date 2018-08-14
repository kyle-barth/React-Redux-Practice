// const book = {
//     title: 'My book',
//     Author: 'Me',
//     publisher: {
//         // name: 'Penguin'
//     }
// }

// const { name: publisherName = 'Self-Published' } = book.publisher

// console.log(publisherName)

const item = ['coffee (iced)', '£3.25', '£3.50', '£3.75']
const [itemName, , mediumPrice] = item

console.log(`A medium ${itemName} costs ${mediumPrice}`)