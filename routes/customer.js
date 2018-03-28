const db = require('../models')
const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    db.Customer.findAll()
        .then(dataCustomer => {
            res.render('customers/customer' ,{customersData: dataCustomer})
        })
        .catch(err => {
            res.send(err.message)
        })
})

router.get('/edit/:id', (req, res) => {
    db.Customer.findOne({
        where: {
            id: req.params.id
        }
    })
    .then(dataCustomer => {
        res.render('customers/edit_customer' ,{customersData: dataCustomer})
    })
    .catch(err => {
        res.send(err.message)
    })
})

module.exports = router;