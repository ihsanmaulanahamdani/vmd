const db = require('./models');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
var session = require('express-session');
const model = require('./models')

app.use(bodyParser.urlencoded({
  extended: false
}));

app.set('view engine', 'ejs');

// app.use(session({
//   secret: 'hacktiv8 gokil',
//   resave: false,
//   saveUninitialized: true
// }));

// app.get('/login', function(req, res){
//   var my_req_body = {
//     email: 'udin@jmail.com'
//   }
//
//   model.Customer.findOne({
//     where: {
//       email: my_req_body.email
//     }
//   })
//   .then(function(dataCustomer){
//     if(dataCustomer){
//       req.session.user = dataCustomer
//       // res.send(req.session.user)
//       // res.render('buys/buy',{user:req.session.user})
//       res.redirect('/buys')
//     }
//   })
//
// })

let routeLogin = require('./routes/login');
app.use('/', routeLogin);

// items
// let routeLogin = require('./routes/login');
// app.use('/login', routeLogin);

// items
let routeItems = require('./routes/item');
app.use('/items', routeItems);

// customers
let routeCustomers = require('./routes/customer');
app.use('/customers', routeCustomers);

// buys
let routebuys = require('./routes/buy');
app.use('/buys', routebuys);



app.listen(4000);
