const express = require('express')
const app = express()
require('dotenv').config()


const breakfastRouter = require('./routes/breakfast')

app.use((req, res, next) => {
    console.log('path: ', req.path)
    console.log('method: ', req.method)
    // next('banana')
    next()
})

console.log(process.env.MESSAGE)

app.use((err, req, res, next) => {
    console.log(err)
    next('orange')
})

app.use(express.json())
app.use('/static', express.static('assets/css'))


app.use('/breakfast', breakfastRouter)

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


app.listen(process.env.PORT, () => console.log(`Listning on port ${process.env.PORT}...`))