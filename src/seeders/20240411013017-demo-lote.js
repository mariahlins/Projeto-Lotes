'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('lotes', [
      {
        numeroLote:1,
        dataPlantio:'01/01/2024',
        dataColheita:'29/03/2024',
        InfoAdicional:'TESTE',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
     ], {});
    
  },

  async down (queryInterface, Sequelize) {
    
  }
};
