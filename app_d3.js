const express = require('express')
const app = express()
require('dotenv').config()

const sqlite3 = require('sqlite3');
const db = new sqlite3.Database(process.env.DATA_SOURCE, sqlite3.OPEN_READWRITE);

app.use(express.json())

app.get('/animals', (req, res) => {
    const sql = 'SELECT * FROM animals;'

    db.all(sql, [], (err, rows) => {
        res.json({animals: rows})
    })
})

app.get('/animals/:id', (req, res) => {
    const sql = 'SELECT * FROM animals WHERE id = ?'
    const params = [req.params.id]
    db.get(sql, params, (err, row) => {
        res.json({animal: row})
    })
})

app.post('/animals', (req, res) => {
    const sql = 'INSERT INTO animals (name, genus, biome, avg_weight, is_vertebrate, diet, is_cute) VALUES (?, ?, ?, ?, ?, ?, ?);'
    const { name, genus, biome, avg_weight, is_vertebrate, diet, is_cute } = req.body;
    const params = [name, genus, biome, avg_weight, is_vertebrate, diet, is_cute]
    db.run(sql, params, (err) => {
        if (err) {
            res.json(err)
        } else {
            res.json("Animal successfully created")
        }
    })
})

app.listen(process.env.PORT, () => console.log(`Listning on port ${process.env.PORT}...`))