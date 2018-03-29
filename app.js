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

let routeLogin = require('./routes/login');
app.use('/', routeLogin);

// items
let routeItems = require('./routes/item');
app.use('/items', routeItems);

// customers
let routeCustomers = require('./routes/customer');
app.use('/customers', routeCustomers);

// buys
let routebuys = require('./routes/buy');
app.use('/buys', routebuys);

// transactions
let routeTransactions = require('./routes/transaction_history')
app.use('/transactions', routeTransactions)

app.listen(4000);
