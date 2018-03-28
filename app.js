const db = require('./models')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.urlencoded({
  extended: false
}))

app.set('view engine', 'ejs')

// app.get('/', (req, res) => {
//     db.Customer.findAll()
//         .then(dataCustomer => {
//             res.send('ihsan')
//         })
//         .catch(err => {
//             res.send(err.message)
//         })
// })

// items
let routeItems = require('./routes/item')
app.use('/items', routeItems)

// customers
let routeCustomers = require('./routes/customer')
app.use('/customers', routeCustomers)

// transactions
let routeTransactions = require('./routes/transaction')
app.use('/transactions', routeTransactions)


app.listen(4000)