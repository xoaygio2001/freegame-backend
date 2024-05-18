'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TagGame extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      TagGame.belongsTo(models.Game, { foreignKey: 'gameId', targetKey: 'id' })
      TagGame.belongsTo(models.AllCode, { foreignKey: 'tagId', targetKey: 'keyMap' })
    }
  }
  TagGame.init({
    tagId: DataTypes.STRING,
    gameId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'TagGame',
  });
  return TagGame;
};