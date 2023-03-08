require('dotenv').config()
const { Animal } = require('./db/models')

const testAnimal = async () => {
    let animal = await Animal.create({
        name: 'Blue Whale',
        genus: 'Balaenoptera',
        avgWeight: 300000,
        isVertebrate: true,
        isCute: false
    })
}

testAnimal()