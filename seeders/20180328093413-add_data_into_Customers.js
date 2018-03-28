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

    return queryInterface.bulkInsert('Customers', [{
      parent_name: 'Bambang',
      email: 'bambang@jmail.com',
      password: '12345678',
      salt: '1343b34jhbjdafsdfhb',
      child_name: 'Pamungkas',
      pin: 1234,
      saldo: 1000000,
      budget_limit: 100000,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      parent_name: 'Udin',
      email: 'bambang@jmail.com',
      password: '87654321',
      salt: 'iawb32jn3hbr23hbfhw',
      child_name: 'Aldy',
      pin: 4321,
      saldo: 500000,
      budget_limit: 50000,
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

    return queryInterface.bulkDelete('Customers', [{
      parent_name: 'Bambang',
      email: 'bambang@jmail.com',
      password: '12345678',
      salt: '1343b34jhbjdafsdfhb',
      child_name: 'Pamungkas',
      pin: 1234,
      saldo: 1000000,
      budget_limit: 100000,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      parent_name: 'Udin',
      email: 'bambang@jmail.com',
      password: '87654321',
      salt: 'iawb32jn3hbr23hbfhw',
      child_name: 'Aldy',
      pin: 4321,
      saldo: 500000,
      budget_limit: 50000,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  }
};