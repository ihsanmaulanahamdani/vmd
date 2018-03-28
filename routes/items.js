var express = require('express')
var router = express.Router()
const model = require('../models')

router.get('/',function(req,res){
  // res.send('ini controller items')
  model.Item.findAll({raw:true})
  .then(dataItem => {
    // res.send(dataItem)
    // console.log(dataItem)
    res.render('items',{Items:dataItem})
  })
  .catch(error => {
    res.send('ini error coy', error)
  })
})

router.get('/add',function(req,res){
  res.render('item/addItem.js')
})


module.exports = router
