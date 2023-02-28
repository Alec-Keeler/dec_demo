const express = require('express')
const app = express()

app.get('/resource', (req, res) => {
    res.send('Fetch all the resources')
})

app.get('/respource/:id', (req, res) => {
    // res.send(`Fetch one resource, with an id of ${}`)
})

app.post('/resource', (req, res) => {
    res.send('Create a new instance of the resource')
})

app.get('/another-resource', (req, res) => {
    res.send('Fetch all of another resource')
})


app.listen(8000, () => console.log('Listning on port 8000...'))