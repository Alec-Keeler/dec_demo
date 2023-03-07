require('dotenv').config()
const { Animal } = require('./db/models')

const testAnimal = async () => {
    let animal = await Animal.create({
        name: 'Red Whale',
        genus: 'test',
        avgWeight: 10000,
        isVertebrate: true,
        isCute: true
    })
}

testAnimal()