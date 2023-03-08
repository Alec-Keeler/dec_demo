'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Diet extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Diet.hasMany(models.Animal, {foreignKey: 'dietTypeId', onDelete: 'CASCADE', hooks: true})
      // FROM Diets
      // JOIN Animals ON (diets.id = animals.dietTypeId)
    }
  }
  Diet.init({
    type: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Diet',
  });
  return Diet;
};