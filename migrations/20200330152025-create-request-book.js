'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('RequestBooks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      borrowedDate: {
        type: Sequelize.DATE
      },
      returnedDate: {
        type: Sequelize.DATE
      },
      status: {
        type: Sequelize.STRING
      },
      fee: {
        type: Sequelize.INTEGER
      },
      comment: {
        type: Sequelize.STRING
      },
      username: {
        type: Sequelize.STRING
      },
      borrowingDate: {
        type: Sequelize.STRING
      },
      returningDate: {
        type: Sequelize.STRING
      },
      bookLend: {
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
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('RequestBooks');
  }
};