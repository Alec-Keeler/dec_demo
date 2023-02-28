const express = require('express')
const app = express()
const { errorHandlers } = require('./utils')

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

app.use('/breakfast', (req, res, next) => {
    console.log('path: ', req.path)
    console.log('method: ', req.method)
    // next('banana')
    next()
})



app.use((err, req, res, next) => {
    console.log(err)
    next('orange')
})

app.use(express.json())
app.use('/static', express.static('assets/css'))


app.get('/breakfast', (req, res, next) => {
    // res.json(data)
    throw new Error('Something died :(')
    // res.send('Fetch all the resources')
})

app.get('/breakfast/:id', (req, res) => {
    res.json(data[req.params.id])
    // console.log('in end point, path: ', req.path)
    // res.send(`Fetch one resource, with an id of ${req.params.id}`)
})

app.post('/breakfast', errorHandlers, (req, res) => {
    console.log(req.body)
    data.push(req.body)
    res.send('Create a new instance of the resource')
})

app.get('/another-resource', (req, res) => {
    res.send('Fetch all of another resource')
})

app.use((req, res, next) => {
    const err = new Error('The resource you were looking for could not be found')
    err.statusCode = 404
    next(err)
})

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500
    res.status(statusCode)
    res.json({
        status: statusCode,
        message: err.message || 'Something Went Wrong'
    })
})


app.listen(8000, () => console.log('Listning on port 8000...'))