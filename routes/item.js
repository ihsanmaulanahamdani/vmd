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

router.get('/edit/:id', (req, res) => {
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
router.post('/edit/:id',function(req,res){
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
router.get('/delete/:id', (req, res) => {
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
