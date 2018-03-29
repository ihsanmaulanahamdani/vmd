const db = require('../models')
const express = require('express')
const sq = require('sequelize')
const router = express.Router()
const Op = sq.Op

router.get('/history/:id', (req, res) => {
    db.Transaction.findAll({
            where: {
                CustomerId: req.params.id
            }
        })
        .then(dataItems => {
            let itemId = [];
            dataItems.forEach(element => {
                itemId.push(element.ItemId)
            });
            if(itemId.length === 0) {
                res.render('transactions/transaction_history', {
                    allItem: []
                })
            } else {
                db.Item.findAll({
                    where: {
                        id: {
                            [Op.or]: itemId
                        }
                    }
                })
                .then(items => {
                    res.render('transactions/transaction_history', {
                        allItem: items
                    })
                })
            }
        })
        .catch(err => {
            res.send(err.message)
        })
})

module.exports = router;