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

module.exports = router
