'use strict';

const { Animal, Biome } = require('../models')

const animals = [
  {
    name: 'American Crow',
    biomes: [
      'tropical forest',
      'woodland',
    ]
  },
  {
    name: 'Mountain Goat',
    biomes: [
      'alpine tundra',
      'urban',
    ]
  },
  {
    name: 'Milk Snake',
    biomes: [
      'temperate forest',
      'woodland',
    ]
  },
  {
    name: 'Sloth',
    biomes: [
      'tropical forest',
      'woodland',
      'urban',
    ]
  },
  {
    name: 'Orangutan',
    biomes: [
      'temperate forest',
      'alpine tundra',
    ]
  },
]

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   for (let i = 0; i < animals.length; i++) {
    const animal = animals[i];
    const animalRecord = await Animal.findOne({where: {name: animal.name}})
    const biomes = await Biome.findAll({
      where: {
        name: animal.biomes
      }
    })
    await animalRecord.addBiomes(biomes)
   }
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('AnimalBiomes')
  }
};
