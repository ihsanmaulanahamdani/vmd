var express = require('express')
var router = express.Router()
const model = require('../models')
var session = require('express-session');


router.get('/', function(req,res){
  model.Item.findAll({raw:true})
  .then(dataBuy => {
    res.render('buys/buy',{Buys:dataBuy})
  })
  .catch(error => {
    res.send('ini error coy', error)
  })
})

// function checklogin(re, res)=>{
//     re.session ada ?
//      next
//      else {
//        redirect ke login
//      }
// }

router.get('/:id', (req, res) => {
  model.Item.findOne({
    where: {
      id: req.params.id
    }
  })
  .then(dataItem => {
    res.send(dataItem)
    // res.render('buys/add_buy',{items: dataItem})
    // model.Customer.findOne({
    //   where: {
    //     email: my_req_body.email
    //   }
    // })
    // .then(function(dataCustomer){
    //   res.send(dataCustomer)
    // })
    // .catch(function(error){
    //   res.send('ini error dari session', error)
    // })
  })
  .catch(err => {
    res.send(err.message)
  })
})
//
// // edit data item
// router.post('/edit/:id',function(req,res){
//   // console.log(req.params)
//   let idObj = req.params.id
//   let obj = {
//     name: req.body.name,
//     stock: req.body.stock,
//     price: req.body.price,
//     createdAt: new Date(),
//     updatedAt: new Date()
//   }
//   // console.log('==============',obj)
//   model.Item.update(obj, {
//       where:{id:idObj}
//   })
//   .then(() => {
//     res.redirect('/items')
//   })
//   .catch(err => {
//     res.send('ini errrrrrr',err)
//   })
// })
//
// // delete item
// router.get('/delete/:id', (req, res) => {
//   let idObj = req.params.id
//   model.Item.destroy({
//     where: {
//       id: idObj
//     }
//   })
//   .then(() => {
//     res.redirect('/items')
//   })
//   .catch(err => {res.send(err)})
// })



module.exports = router
