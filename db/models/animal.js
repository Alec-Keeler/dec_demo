'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Animal extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Animal.belongsTo(models.Diet, {foreignKey: 'dietTypeId'})
      // FROM Animals
      // JOIN Diets ON (animals.dietTypeId = diets.id)

      Animal.belongsToMany(models.Biome, {
        through: models.AnimalBiome,
        foreignKey: 'animalId',
        otherKey: 'biomeId'
      })
    }
  }
  Animal.init({
    name: {
      type: DataTypes.STRING(150),
      allowNull: false,
      unique: true,
      validate: {
        len: [1, 150],
        isNotBlue(value) {
          let words = value.split(' ')
          if (words.includes('Blue')) {
            throw new Error('Animals may not be blue!')
          }
        }
      }
    },
    genus: DataTypes.STRING,
    avgWeight: DataTypes.FLOAT,
    isVertebrate: DataTypes.BOOLEAN,
    isCute: DataTypes.BOOLEAN,
    dietTypeId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Animal',
  });
  return Animal;
};