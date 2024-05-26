const express = require('express');
const fs = require('fs');

const app = express();

app.use('/', (req, res, next) => {
    console.log('Main middleware!');
    next();
});

app.use('/users', (req, res, next) => {
    console.log('Ciao1');
    res.send('<h1>To "Users" page</h1>');
    fs.writeFileSync(file = 'C:\\Users\\lilyerebe55\\Downloads\\node_project\\Exercise2\\ciao1.txt', data = 'Ciao da /users');
});

app.use('/', (req, res, next) => {
    console.log('Ciao2');
    res.send('<h1>Welcome!</h1>');
    fs.writeFileSync(file = 'C:\\Users\\lilyerebe55\\Downloads\\node_project\\Exercise2\\ciao2.txt', data = 'Ciao da /');
});

app.listen(5000);