'use strict';
module.exports = (sequelize, DataTypes) => {
  var Transaction = sequelize.define('Transaction', {
    ItemId: DataTypes.INTEGER,
    CustomerId: DataTypes.INTEGER,
    transaction_date: DataTypes.DATE
  }, {});
  Transaction.associate = function(models) {
    // associations can be defined here
  };
  return Transaction;
};