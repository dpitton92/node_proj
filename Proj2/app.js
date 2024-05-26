const express = require('express');

const app = express();

const fs = require('fs');
const bodyParser = require('body-parser');

const adminRoutes = require('./routes/admin');

const shopRoutes = require('./routes/shop');

app.use(adminRoutes);
app.use(shopRoutes);

app.use(bodyParser.urlencoded({extended:false})); //Before calling next(), it executes
//body parsing.



//const server = http.createServer(app);

//server.listen(3000);
app.listen(3000);