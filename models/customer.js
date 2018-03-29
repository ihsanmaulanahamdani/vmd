'use strict';
module.exports = (sequelize, DataTypes) => {
  var Customer = sequelize.define('Customer', {
    parent_name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      isEmail: {
        args: true,
        msg: 'Email not valid!'
      }
    },
    password: DataTypes.STRING,
    salt: DataTypes.STRING,
    child_name: DataTypes.STRING,
    pin: DataTypes.INTEGER,
    saldo: DataTypes.INTEGER,
    budget_limit: DataTypes.INTEGER
  }, {});
  Customer.associate = function (models) {
    // associations can be defined here
    Customer.belongsToMany(models.Item, {
      through: models.Transaction
    });
  };
  return Customer;
};