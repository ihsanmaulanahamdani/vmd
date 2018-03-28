'use strict';
module.exports = (sequelize, DataTypes) => {
  var Customer = sequelize.define('Customer', {
    parent_name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    salt: DataTypes.STRING,
    child_name: DataTypes.STRING,
    pin: DataTypes.INTEGER,
    saldo: DataTypes.INTEGER,
    budget_limit: DataTypes.INTEGER
  }, {});
  Customer.associate = function(models) {
    // associations can be defined here
  };
  return Customer;
};