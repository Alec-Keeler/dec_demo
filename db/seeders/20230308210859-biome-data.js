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
   await queryInterface.bulkInsert('Biomes', [
     { name: 'temperate forest', exampleLocation: 'Eastern Deciduous Forest' },
     { name: 'tropical forest', exampleLocation: 'Amazon Rain Forest' },
     { name: 'woodland', exampleLocation: 'East African Plains' },
     { name: 'alpine tundra', exampleLocation: 'North Cascades' },
     { name: 'urban', exampleLocation: 'Any city lol' },
     { name: 'temperate grassland', exampleLocation: 'Eurasion steppes' },
     { name: 'desert', exampleLocation: 'Mojave Desert' },
     { name: 'ocean', exampleLocation: 'Pacific Ocean' },
   ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Biomes')
  }
};
