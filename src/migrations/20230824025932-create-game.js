'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Games', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      img: {
        type: Sequelize.BLOB('long')
      },
      url: {
        type: Sequelize.STRING
      },
      contentMarkdown: {
        type: Sequelize.TEXT('LONG')
      },
      contentHTML: {
        type: Sequelize.TEXT('LONG')
      },
      capacity: {
        type: Sequelize.INTEGER
      },
      partNumber: {
        type: Sequelize.INTEGER
      },
      ram: {
        type: Sequelize.INTEGER
      },
      playerNumber: {
        type: Sequelize.INTEGER
      },
      language: {
        type: Sequelize.STRING
      },
      win: {
        type: Sequelize.STRING
      },
      playWith: {
        type: Sequelize.STRING
      },
      seri: {
        type: Sequelize.STRING
      },
      point: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Games');
  }
};