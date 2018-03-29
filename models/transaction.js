'use strict';
module.exports = (sequelize, DataTypes) => {
  var Transaction = sequelize.define('Transaction', {
    ItemId: DataTypes.INTEGER,
    CustomerId: DataTypes.INTEGER,
    transaction_date: DataTypes.DATE
  }, {
    hooks:{
      afterCreate: (user,option) => {
        sequelize.models.Item.findOne({
          where: {
            id: user.ItemId
          }
        })
        .then(dataItem =>{
          let stockUpdate = dataItem.stock -1
          sequelize.models.Item.update({
            stock: stockUpdate
          },{
            where:{
              id: user.ItemId
            }
          })

        })

        sequelize.models.Customer.findOne({
          where: {
            id: user.CustomerId
          }
        })
        .then(dataCustomer =>{
          sequelize.models.Item.findOne({
            where: {
              id: user.ItemId
            }
          })
          .then(dataItem =>{
            let saldoUpdate = dataCustomer.saldo - dataItem.price
            let budgetLimitUpdate = dataCustomer.budget_limit - dataItem.price
            sequelize.models.Customer.update({
              saldo: saldoUpdate,
              budget_limit:budgetLimitUpdate
            },{
              where: {
                id: user.CustomerId
              }
            })
          })
        })

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
