'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable("books",{
      id:{
        primaryKey:true,
        autoIncrement:true,
        allowNull:false,
        type:Sequelize.INTEGER
      },
      title:{
        type:Sequelize.STRING(50),
        allowNull:false
      },
      author:{
        type:Sequelize.STRING(255),
        allowNull: false
      }
    })
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('books');
  }
};
