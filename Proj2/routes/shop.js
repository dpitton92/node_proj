const express = require('express');

const router = express.Router();

module.exports = router;

router.get('/', (req, res, next) => {
    console.log("This always runs!");
    //Instead of res.setHeader... and res.write...
    next();
});

router.get('/', (req, res, next) => {
    console.log("In the first middleware!");
    //Instead of res.setHeader... and res.write...
    res.send('<h1>Hello from Express!</h1>');
});