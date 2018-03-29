const db = require('../models')
const express = require('express')
const router = express.Router()
const helpers = require('../helpers/index');

router.get('/', helpers.checkLogin, (req, res) => {
    db.Customer.findAll()
        .then(dataCustomer => {
            res.render('customers/customer' ,{customersData: dataCustomer})
        })
        .catch(err => {
            res.send(err.message)
        })
})

router.get('/edit/:id', helpers.checkLogin, (req, res) => {
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

router.post('/edit/:id', helpers.checkLogin, (req, res) => {
    db.Customer.findOne({
            where: {
                id: req.params.id
            }
        })
        .then(customer => {
            db.Customer.update({
                    parent_name: req.body.parent_name,
                    email: req.body.email,
                    password: req.body.password,
                    salt: req.body.salt,
                    child_name: req.body.child_name,
                    pin: req.body.pin,
                    saldo: req.body.saldo,
                    budget_limit: req.body.budget_limit,

                }, {
                    where: {
                        id: req.params.id
                    }
                })
                .then(data => {
                    res.redirect('/customers')
                })
                .catch(err => {
                    res.send(err.message)
                })
        })


})

router.get('/delete/:id', helpers.checkLogin, (req, res) => {
    db.Customer.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(data => {
            res.redirect('/customers')
        })
        .catch(err => {
            res.send(err.message)
        })
})

module.exports = router;
