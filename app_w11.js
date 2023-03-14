const express = require('express')
const app = express()
require('dotenv').config()
const { Animal, Diet, AnimalBiome, Biome } = require('./db/models')
const { Op } = require("sequelize");
const {errorHandlers} = require("./utils")


// Query methods: findAll, findOne, findByPk

app.use(express.json())
app.use(express.static('./assets'))

//read urlencoded request bodies
app.use(express.urlencoded())
//allow pug
app.set('view engine', 'pug')

app.get('/animals/:id(\\d+)', async (req, res) => {
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
        // attributes: ['name', 'genus'],
        // where: {
            // genus: 'Corvid'
            // name: {
            //     [Op.substring]: `${req.query.animal}`
            // }
        // },
        // order: [['genus', 'DESC'], ['name']]
    });

    // res.json(animals)
    res.render('animals', {animals})
})

app.get('/add-animal', async(req, res) => {
    const diets = await Diet.findAll({
        order: ['type']
    })
    res.render('create-animal', {diets, input: {}})
})

// Insert methods: create, build (w/ save, validate)
app.post('/animals', errorHandlers, async (req, res) => {
    const {name, genus, avgWeight, isVertebrate, isCute, dietTypeId} = req.body
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
    if (Object.keys(req.errors).length) {
        const diets = await Diet.findAll({
            order: ['type']
        })
        res.render('create-animal', { diets, errors: req.errors, input: req.body })
    }

    const animal = await Animal.create({
        name, genus, avgWeight, isVertebrate, isCute, dietTypeId
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

app.get('/diets/:id', async (req, res) => {
    // const diet = await Diet.findByPk(req.params.id)
    // const animals = await diet.getAnimals()
    // res.json({
    //     diet,
    //     animals
    // })

    // const data = await Diet.findByPk(req.params.id, {
    //     include: Animal
    // })
    const data = await Diet.findByPk(req.params.id, {
        // include: [Animal, AnimalBiome, Biome]
        include: {
            model: Animal,
            include: {
                model: Biome
            }
        }
    })

    const altData = await Animal.findOne({
        attributes: [],
        where: {
            name: 'Red Panda'
        }, 
        include: [Diet, {
            model: Biome,
            attributes: ['name'],
            through: {
                attributes: []
            }
            // include: OtherModel
        }]
    })

    res.json(altData)
})

app.post('/diets/:id/animals', async (req, res) => {
    const diet = await Diet.findByPk(req.params.id)
    const { name, genus, avgWeight, isVertebrate, isCute } = req.body
    const newAnimal = await diet.createAnimal({
        name, genus, avgWeight, isVertebrate, isCute
    })
    res.json({
        animal: newAnimal
    })
})

app.post('/animals/:id/biomes', async (req, res) => {
    const {biomeIds} = req.body
    const animal = await Animal.findByPk(req.params.id)
    await animal.addBiomes(biomeIds)
    res.send('Associated your list of biomes to the specified animal')
})

app.get('/animals/agg', async (req, res) => {
    const animals = await Animal.findAll()

    const count = await Animal.count()
    const minAvgWeight = await Animal.min('avgWeight')
    const maxAvgWeight = await Animal.max('avgWeight')
    const sumAvgWeight = await Animal.sum('avgWeight')
    // console.log(sumAvgWeight/count)

    res.json({
        animals,
        count,
        maxAvgWeight,
        minAvgWeight,
        averageAvgWeight: sumAvgWeight/count
    })
})

app.listen(process.env.PORT, () => console.log(`Listening on port ${process.env.PORT}`))