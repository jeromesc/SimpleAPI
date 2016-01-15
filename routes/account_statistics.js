/**
 * Created by Jerome on 15-12-03.
 */
var express = require('express');
var router = express.Router();


/* GET Accounts listing. */
router.get('/:id', function(req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    res.send(
        JSON.stringify({
            periods:
                [
                    {
                        month: "January",
                        balance: 200.00,
                        incomes: 1200.00,
                        expenses: 1000.00
                    },
                    {
                        month: "Febuary",
                        balance: 300.00,
                        incomes: 1200.00,
                        expenses: 900.00
                    },
                    {
                        month: "March",
                        balance: -100.00,
                        incomes: 1000.00,
                        expenses: 1500.00
                    },
                    {
                        month: "April",
                        balance: -200.00,
                        incomes: 1000.00,
                        expenses: 1100.00
                    },
                    {
                        month: "May",
                        balance: 0.00,
                        incomes: 1200.00,
                        expenses: 1000.00
                    }
                ]
            }, null, 3));
});


module.exports = router;