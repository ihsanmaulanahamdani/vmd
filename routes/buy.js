var express = require('express')
var router = express.Router()
const model = require('../models')
var session = require('express-session');
const sequelize = require('sequelize');
const helpers = require('../helpers/index');


router.get('/', helpers.checkLogin, function(req,res){
  model.Item.findAll({
    order: sequelize.literal('name ASC')
  })
  .then(dataBuy => {
    res.render('buys/buy',{Buys:dataBuy})
  })
  .catch(error => {
    res.send('ini error coy', error)
  })
})

router.get('/:id', helpers.checkLogin, function(req, res){
  // res.send(req.session.user)
  model.Item.findOne({
    where: {
      id: req.params.id
    }
  })
  .then(dataItem => {
    // res.send(dataItem)
    res.render('buys/add_buy',{items: dataItem})
  })
  .catch(err => {
    res.send(err.message)
  })
})

router.post('/:id', helpers.checkLogin, function(req, res){
  // res.send(req.session.user)
  let user = req.session.user
  model.Transaction.create({
    ItemId: req.params.id,
    CustomerId: user.id,
    transaction_date: new Date(),
    createdAt: new Date(),
    updatedAt: new Date()
  })
  .then(data => {
    // res.send(data)
    res.redirect('/buys')
  })
  .catch(err =>{
    res.send('inii errror', err)
  })
})


module.exports = router
