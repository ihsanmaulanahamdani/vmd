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

    return queryInterface.bulkInsert('Transactions', [{
      ItemId: 1,
      CustomerId: 2,
      transaction_date: new Date(),
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      ItemId: 2,
      CustomerId: 2,
      transaction_date: new Date(),
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      ItemId: 1,
      CustomerId: 1,
      transaction_date: new Date(),
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      ItemId: 2,
      CustomerId: 1,
      transaction_date: new Date(),
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

   return queryInterface.bulkDelete('Transactions', [{
    ItemId: 1,
    CustomerId: 2,
    transaction_date: new Date(),
    createdAt: new Date(),
    updatedAt: new Date()
  }, {
    ItemId: 2,
    CustomerId: 2,
    transaction_date: new Date(),
    createdAt: new Date(),
    updatedAt: new Date()
  }, {
    ItemId: 1,
    CustomerId: 1,
    transaction_date: new Date(),
    createdAt: new Date(),
    updatedAt: new Date()
  }, {
    ItemId: 2,
    CustomerId: 1,
    transaction_date: new Date(),
    createdAt: new Date(),
    updatedAt: new Date()
  }], {});
  }
};