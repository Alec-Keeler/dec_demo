const express = require('express')
const app = express()
require('dotenv').config()

app.use(express.json())

app.get('/animals/:id', (req, res) => {

})

app.get('/animals', (req, res) => {

})

app.post('/animals', (req, res) => {

})

app.put('/animals/:id', (req, res) => {
    
})

app.delete('/animals/:id', (req, res) => {

})