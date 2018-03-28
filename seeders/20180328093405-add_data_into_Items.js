'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
   return queryInterface.bulkInsert('Items', [{
    name: 'Nasi Kuning',
    stock: 13,
    price: 15000,
    createdAt: new Date(),
    updatedAt: new Date()
  }, {
    name: 'Keripik',
    stock: 20,
    price: 5000,
    createdAt: new Date(),
    updatedAt: new Date()
  }, {
    name: 'Permen Karet',
    stock: 15,
    price: 1000,
    createdAt: new Date(),
    updatedAt: new Date()
  }, {
    name: 'Cola',
    stock: 30,
    price: 8000,
    createdAt: new Date(),
    updatedAt: new Date()
  }, {
    name: 'Teh',
    stock: 13,
    price: 5000,
    createdAt: new Date(),
    updatedAt: new Date()
  }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('Items', [{
      name: 'Nasi Kuning',
      stock: 13,
      price: 15000,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Keripik',
      stock: 20,
      price: 5000,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Permen Karet',
      stock: 15,
      price: 1000,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Cola',
      stock: 30,
      price: 8000,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Teh',
      stock: 13,
      price: 5000,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  }
};