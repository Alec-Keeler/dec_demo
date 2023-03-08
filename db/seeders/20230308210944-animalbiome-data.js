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
   await queryInterface.bulkInsert('AnimalBiomes', [
     { animalId: 1, biomeId: 1 },
     { animalId: 1, biomeId: 3 },
     { animalId: 2, biomeId: 5 },
     { animalId: 3, biomeId: 4 },
     { animalId: 3, biomeId: 6 },
     { animalId: 4, biomeId: 7 },
     { animalId: 4, biomeId: 8 },
     { animalId: 2, biomeId: 1 },
   ])
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
