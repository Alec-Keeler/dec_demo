const express = require('express')
const app = express()
require('dotenv').config()
const { Animal } = require('./db/models')
const { Op } = require("sequelize");


// Query methods: findAll, findOne, findByPk

app.use(express.json())

app.get('/animals/:id', async (req, res) => {
    console.log(req.params)
    // const animal = await Animal.findOne({
    //     attributes: ['name', 'genus'], // SELECT
    //     where: {
    //         id: req.params.id
    //     }
    // });
    const animal = await Animal.findByPk(req.params.id, {
        attributes: ['name', 'genus']
    })
    res.json(animal)
})

app.get('/animals', async (req, res) => {
    const animals = await Animal.findAll({
        attributes: ['name', 'genus'],
        where: {
            // genus: 'Corvid'
            name: {
                [Op.substring]: `${req.query.animal}`
            }
        },
        // order: [['genus', 'DESC'], ['name']]
    });

    res.json(animals)
})


// Insert methods: create, build (w/ save, validate)
app.post('/animals', async (req, res) => {
    const {name, genus, avgWeight, isVertebrate, isCute} = req.body
    // const animal = Animal.build({
    //     name,
    //     genus,
    //     avgWeight,
    //     isVertebrate,
    //     isCute
    // })
    // console.log(animal)
    // // animal.validate()
    // await animal.save()
    const animal = await Animal.create({
        name, genus, avgWeight, isVertebrate, isCute
    })
    res.json(animal)
})

//  Model.update({where:{}})
// query for the target record, then use .update() instance method
app.put('/animals/:id', async (req, res) => {
    const { name } = req.body
    let animal = await Animal.findByPk(req.params.id)
    animal.name = name
    await animal.save()
    res.json({
        message: "Successfully updated the animal",
        animal
    })
})

app.delete('/animals/:id', async (req, res) => {
    let animal = await Animal.findByPk(req.params.id)
    await animal.destroy()
    res.json({
        message: `Animal with an id of ${req.params.id} has been deleted`
    })
})

app.listen(process.env.PORT, () => console.log(`Listening on port ${process.env.PORT}`))