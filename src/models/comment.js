'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      Comment.hasMany(models.Comment, { foreignKey: 'relyToCommentId', as: 'commentChild' });
      Comment.belongsTo(models.Comment, { foreignKey: 'relyToCommentId', as: 'parentComment' });
      Comment.belongsTo(models.User, { foreignKey: 'userId', as: 'userData' });



    }
  }
  Comment.init({
    gameId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    content: DataTypes.STRING,
    relyToCommentId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Comment',
  });
  return Comment;
};