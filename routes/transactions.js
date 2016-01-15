/**
 * Created by Jerome on 15-12-03.
 */
var express = require('express');
var router = express.Router();

/* GET Accounts listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

/* GET Accounts listing. */
router.get('/:account_id', function (req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    if (req.params.account_id == "73-677-21" || req.params.account_id == "73-677-11" ) {
        res.send(
            JSON.stringify(
                {
                    transactions: [
                        {
                            transaction_id: 1,
                            date: "03-12-2015",
                            description: "Online Correction",
                            amount: 1000.00,
                            type: "debit",
                            balance: 500.00
                        },
                        {
                            transaction_id: 2,
                            date: "03-12-2015",
                            description: "Bill Payment [Mastercard]",
                            amount: 100.00,
                            type: "debit",
                            balance: 400.00
                        },
                        {
                            transaction_id: 3,
                            date: "02-12-2015",
                            description: "Salary [BNC]",
                            amount: 2000.00,
                            type: "credit",
                            balance: 2400.00
                        },
                        {
                            transaction_id: 3,
                            date: "02-12-2015",
                            description: "Salary [BNC]",
                            amount: 2000.00,
                            type: "credit",
                            balance: 2400.00
                        }
                    ]
                }, null, 3));
    } else if (req.params.account_id == "79-437-57" || req.params.account_id == "79-437-87") {
        res.send(
            JSON.stringify(
                {
                    transactions: [
                        {
                            transaction_id: 1,
                            date: "03-12-2015",
                            description: "Bill Payment [Microsoft]",
                            amount: 11.00,
                            type: "debit",
                            balance: 500.00
                        },
                        {
                            transaction_id: 2,
                            date: "03-12-2015",
                            description: "Bill Payment [Mastercard]",
                            amount: 100.00,
                            type: "debit",
                            balance: 400.00
                        },
                        {
                            transaction_id: 3,
                            date: "02-12-2015",
                            description: "Salary [BNC]",
                            amount: 2000.00,
                            type: "credit",
                            balance: 2400.00
                        },
                        {
                            transaction_id: 3,
                            date: "01-12-2015",
                            description: "Gouv. Versement",
                            amount: 2000.00,
                            type: "credit",
                            balance: 2400.00
                        }
                    ]
                }, null, 3));
    }
});


module.exports = router;