'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Biome extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Biome.belongsToMany(models.Animal, {
        through: models.AnimalBiome,
        foreignKey: 'biomeId',
        otherKey: 'animalId'
      })
      // SELECT * 
      // FROM Biomes
      // JOIN AnimalBiomes ON (Biomes.id = AnimalBiomes.biomeId)
      // JOIN Animals ON (AnimalBiomes.animalId = Animals.id)
    }
  }
  Biome.init({
    name: DataTypes.STRING,
    exampleLocation: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Biome',
  });
  return Biome;
};