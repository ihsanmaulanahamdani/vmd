var express = require('express')
var router = express.Router()
const model = require('../models')
const helpers = require('../helpers/index');

router.get('/',helpers.checkLogin, function(req,res){
  model.Item.findAll({raw:true})
  .then(dataItem => {
    res.render('items/item',{Items:dataItem})
  })
  .catch(error => {
    res.send('ini error coy', error)
  })
})

router.get('/add',helpers.checkLogin, function(req,res){
  res.render('items/add_item.ejs')
})

router.post('/add',helpers.checkLogin, function(req,res){
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

router.get('/edit/:id', helpers.checkLogin, (req, res) => {
  model.Item.findOne({
    where: {
      id: req.params.id
    }
  })
  .then(dataItem => {
    res.render('items/edit_item',{items: dataItem})
  })
  .catch(err => {
    res.send(err.message)
  })
})

// edit data item
router.post('/edit/:id',helpers.checkLogin, function(req,res){
  // console.log(req.params)
  let idObj = req.params.id
  let obj = {
    name: req.body.name,
    stock: req.body.stock,
    price: req.body.price,
    createdAt: new Date(),
    updatedAt: new Date()
  }
  // console.log('==============',obj)
  model.Item.update(obj, {
      where:{id:idObj}
  })
  .then(() => {
    res.redirect('/items')
  })
  .catch(err => {
    res.send('ini errrrrrr',err)
  })
})

// delete item
router.get('/delete/:id', helpers.checkLogin, (req, res) => {
  let idObj = req.params.id
  model.Item.destroy({
    where: {
      id: idObj
    }
  })
  .then(() => {
    res.redirect('/items')
  })
  .catch(err => {res.send(err)})
})



module.exports = router
