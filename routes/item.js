var express = require('express')
var router = express.Router()
const model = require('../models')

router.get('/',function(req,res){
  model.Item.findAll({raw:true})
  .then(dataItem => {
    res.render('items/item',{Items:dataItem})
  })
  .catch(error => {
    res.send('ini error coy', error)
  })
})

router.get('/add',function(req,res){
  res.render('items/add_item.ejs')
})

router.post('/add',function(req,res){
  model.Item.create({
    name:req.body.name,
    stock:req.body.stock,
    price:req.body.price,
    createdAt: new Date(),
    updatedAt: new Date()
  })
  .then(added =>{
    res.redirect('/items')
  })
  .catch(err => {
    res.send(err)
  })
})


module.exports = router
