'use strict';
module.exports = (sequelize, DataTypes) => {
  var Transaction = sequelize.define('Transaction', {
    ItemId: DataTypes.INTEGER,
    CustomerId: DataTypes.INTEGER,
    transaction_date: DataTypes.DATE
  }, {
    hooks:{
      afterCreate: (user,option) => {
        console.log(`${user} ${option}`)
      //   sequelize.models.Item.findOne({
      //     where: {
      //       id: this.ItemId
      //     }
      //   })
      //   .then(dataItem =>{
      //     sequelize.models.Item.update({
      //       stock: stock -1
      //     },{
      //       where:{
      //         id: dataItem.id
      //       }
      //     })
      //
      //   })
      //
      }
    }
  });
  Transaction.associate = function(models) {
    // associations can be defined here
    Transaction.belongsTo(models.Item);
    Transaction.belongsTo(models.Customer);
  };
  return Transaction;
};
