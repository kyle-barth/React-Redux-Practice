const book = {
    title: 'My book',
    Author: 'Me',
    publisher: {
        // name: 'Penguin'
    }
}

const { name: publisherName = 'Self-Published' } = book.publisher

console.log(publisherName)