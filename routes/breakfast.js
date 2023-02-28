const express = require('express')
const router = express.Router()
const { errorHandlers } = require('../utils')

let data = [
    {
        calories: 42,
        flavor: 'chicken',
        cooked: true,
        prepTime: 10,
        category: 'avian',
        name: 'eggs'
    },
    {
        calories: 9001,
        flavor: 'blueberry',
        cooked: true,
        prepTime: 20,
        category: 'pastry',
        name: 'waffles'
    }
]



router.get('/', (req, res, next) => {
    res.json(data)
    // throw new Error('Something died :(')
    // res.send('Fetch all the resources')
})

router.get('/:id', (req, res) => {
    res.json(data[req.params.id])
    // console.log('in end point, path: ', req.path)
    // res.send(`Fetch one resource, with an id of ${req.params.id}`)
})

router.post('/', errorHandlers, (req, res) => {
    console.log(req.body)
    data.push(req.body)
    res.send('Create a new instance of the resource')
})


module.exports = router;