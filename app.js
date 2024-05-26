const http = require('http');

const routes = require('./routes');

const fs = require('fs');


const server = http.createServer(routes);

server.listen(3000);
