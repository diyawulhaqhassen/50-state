'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('States', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      visited: {
        type: Sequelize.BOOLEAN,
        defaultValue:false // set the default value false
      },
      lat: {
        type: Sequelize.FLOAT
      },
      lon: {
        type: Sequelize.FLOAT
      },
      zoom: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date()  // set a new date for the data created

      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date()// set a new date for the data updated9
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('States');
  }
};