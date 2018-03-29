var express = require('express')
var router = express.Router()
const model = require('../models')
var session = require('express-session');


router.use(session({
  secret: 'hacktiv8 gokil',
  resave: false,
  saveUninitialized: true
}));


router.get('/', function (req, res) {
  res.render('login/logged')
})

router.post('/login', function (req, res) {
  var my_req_body = {
    email: req.body.email,
    password: req.body.password
  }

  model.Customer.findOne({
      where: {
        email: my_req_body.email
      }
    })
    .then(function (dataCustomer) {
      // res.send(dataCustomer)
      if (dataCustomer.password === req.body.password) {
        req.session.user = dataCustomer
        // res.send(req.session.user)
        res.render('customers/customer', {
          user: dataCustomer
        })
        // res.redirect('/buys')
      } else {
        res.redirect('/')
      }
    })
  // .catch()

})

module.exports = router