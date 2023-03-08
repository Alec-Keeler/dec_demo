'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AnimalBiome extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  AnimalBiome.init({
    animalId: DataTypes.INTEGER,
    biomeId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'AnimalBiome',
  });
  return AnimalBiome;
};