'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AllCode extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      AllCode.hasMany(models.TagGame, { foreignKey: 'tagId' })
      AllCode.hasMany(models.Game, { foreignKey: 'language' })
      AllCode.hasMany(models.Game, { foreignKey: 'win' })
      AllCode.hasMany(models.Game, { foreignKey: 'playWith' })
      AllCode.hasMany(models.User, { foreignKey: 'roleId' })

    }
  }
  AllCode.init({
    keyMap: DataTypes.STRING,
    type: DataTypes.STRING,
    value: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'AllCode',
  });
  return AllCode;
};