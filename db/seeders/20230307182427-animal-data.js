'use strict';

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
   await queryInterface.bulkInsert('Animals', [ // INSERT INTO Animals (name, genus, avgWeight, isVertebrate, isCute)
     { name: 'Red Panda', genus: 'Ailurus', avgWeight: 7.4, isVertebrate: true, isCute: true },
     { name: 'Raven', genus: 'Corvid', avgWeight: 2.5, isVertebrate: true, isCute: true },
     { name: 'Tiger', genus: 'Panthera', avgWeight: 400, isVertebrate: true, isCute: true },
     { name: 'Llama', genus: 'lama', avgWeight: 440, isVertebrate: true, isCute: true },
     { name: 'Rusty-spotted Cat', genus: 'Prionailurus', avgWeight: 3, isVertebrate: true, isCute: true },
     { name: 'Blob Fish', genus: 'Spineless sculpins', avgWeight: 20, isVertebrate: false, isCute: false },
     { name: 'Lowland Streaked Tenrec', genus: 'Hemicentetes', avgWeight: 4.4, isVertebrate: true, isCute: true },
     { name: 'Western Lowland Gorilla', genus: 'Gorilla', avgWeight: 310, isVertebrate: true, isCute: true },
     { name: 'Pallas`s cat', genus: 'Otocolobus', avgWeight: 7.7, isVertebrate: true, isCute: true },
     { name: 'Shoebill Stork', genus: 'Balaeniceps', avgWeight: 12, isVertebrate: true, isCute: false },
     { name: 'Orangutan', genus: 'Pongo', avgWeight: 120, isVertebrate: true, isCute: false },
     { name: 'Sloth', genus: 'Bradypus', avgWeight: 14, isVertebrate: true, isCute: true },
     { name: 'Milk Snake', genus: 'Lampropeltis', avgWeight: .5, isVertebrate: true, isCute: false },
     { name: 'American Crow', genus: 'Corvid', avgWeight: 1, isVertebrate: true, isCute: false },
     { name: 'Mountain Goat', genus: 'Oreamnos', avgWeight: 150, isVertebrate: true, isCute: true }
   ])
  //  await queryInterface.bulkInsert('Animals')
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Animals') // DELETE FROM animals;
  }
};
