'use strict';
module.exports = (sequelize, DataTypes) => {
  var Item = sequelize.define('Item', {
    name: DataTypes.STRING,
    stock: DataTypes.INTEGER,
    price: DataTypes.INTEGER
  }, {});
  Item.associate = function(models) {
    // associations can be defined here
    Item.belongsToMany(models.Customer, { through: models.Transaction });
  };
  return Item;
};