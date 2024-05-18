'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Game extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Game.hasMany(models.TagGame, { foreignKey: 'gameId' })
      Game.belongsTo(models.AllCode, { foreignKey: 'language', targetKey: 'keyMap', as: 'languageData' })
      Game.belongsTo(models.AllCode, { foreignKey: 'win', targetKey: 'keyMap', as: 'winData' })
      Game.belongsTo(models.AllCode, { foreignKey: 'playWith', targetKey: 'keyMap', as: 'playWithData' })



    }
  }
  Game.init({
    name: DataTypes.STRING,
    img: DataTypes.STRING,
    url: DataTypes.STRING,
    contentMarkdown: DataTypes.TEXT('LONG'),
    contentHTML: DataTypes.TEXT('LONG'),
    capacity: DataTypes.INTEGER,
    partNumber: DataTypes.INTEGER,
    ram: DataTypes.INTEGER,
    playerNumber: DataTypes.INTEGER,
    language: DataTypes.STRING,
    win: DataTypes.STRING,
    playWith: DataTypes.STRING,
    seri: DataTypes.STRING,
    point: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Game',
  });
  return Game;
};