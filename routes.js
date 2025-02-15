const fs = require('fs');

const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;
    if(url === '/') { //true if it is a string and has that value
        res.setHeader('Content-type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Hi</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></input></body>');
        res.write('</html>');
        return res.end();
    }

    if(url === '/message' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
            console.log(chunk);
        }); //listen to certain events
        return req.on('end', () => { //return call to execute it first without waiting for end
            const parsedBody = Buffer.concat(body).toString();
            //console.log(parsedBody);
            const message = parsedBody.split('=')[1];
            //fs.writeFileSync("message.txt", message); //blocks execution until the file is written.
            fs.writeFile('message.txt', message, err => {
                res.statusCode = 302; //redirect
                res.setHeader('Location', '/');
                return res.end(); 
            });
        });
    }
    res.setHeader('Content-type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Hi</title></head>');
    res.write('<body><h1>Hello from my node.js server!</h1></body>');
    res.write('</html>');
    res.end();
};

module.exports = requestHandler;

