const express = require('express');

const router = express.Router();

router.get('/add-product', (req, res, next) => {
    console.log("In another middleware!");
    //Instead of res.setHeader... and res.write...
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit" text="submit!"></button>');
});

app.post('/product', (req, res, next) => {
    /*fs.writeFile(file="C:\\Users\\lilyerebe55\\Downloads\\node_project\\Proj2\\res.txt", data=req.body.toString(), err => {
        console.log("Error");
    });*/
    console.log(req.body);
    res.redirect('/');
});

module.exports = router;