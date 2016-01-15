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
router.get('/:id', function (req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    if (req.params.id == "123") {
        res.send(
            JSON.stringify(
                {
                    accounts: [
                        {
                            name: "Checking",
                            number: "73-677-11",
                            transit: "0689-1",
                            balance: 2400.00
                        },
                        {
                            name: "Savings",
                            number: "79-437-87",
                            transit: "0689-1",
                            balance: -3500.00
                        }
                    ]
                }, null, 3));
    } else if (req.params.id == "456") {
        res.send(
            JSON.stringify(
                {
                    accounts: [
                        {
                            name: "Checking",
                            number: "73-677-21",
                            transit: "0689-1",
                            balance: 1700.00
                        },
                        {
                            name: "Savings",
                            number: "79-437-57",
                            transit: "0689-1",
                            balance: -500.00
                        }
                    ]
                }, null, 3));
    } else {
        res.statusCode = 404;
    }
});


module.exports = router;