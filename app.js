const express = require('express');
const app = express()

app.use(express.json()) // gives access to req.body


app.post(['/juice', '/drink'], (req, res) => {
    // create the juice
    res.json(req.body)
})

//order matters
app.get('/thebestmovie', (req, res) => {
    res.send("A Knight's Tale is the best movie")
})

app.get('/query', (req, res) => {
    console.log(req.query)
    res.send('query strings?')
})


app.get('/test', (req, res) => {
    res.send('Server is alive')
})

app.get('/:movieName', (req, res) => {
    res.send(`${req.params.movieName} is a cool movie`)
})




app.all('/', (req, res) => {
    console.log(req)
    res.status(201)
    res.json({
        faveTv: "Community",
        faveMovie: "Puss In Boots"
    })
})

app.get('/users/all/posts/all', (req, res) => {
    res.send("all the data")
})
app.get('/users/:username/posts/:postId', (req, res) => {
    console.log(req.params)
    res.send(`User ${req.params.username} made post number ${req.params.postId}`)
})




app.listen(8000, () => console.log('Server is running on port 8000...'))