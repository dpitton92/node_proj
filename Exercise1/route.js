const reqHandler = (req, res) => {
    const url = req.url;
    const method = req.method;
    if(url === '/') {
        res.setHeader('Content-type', 'text/html');
        res.write('<html><head><title>Hello! Welcome!</title></head><body><p>I sincerely and humbly welcome you!</p></body></html>');
        return res.end();
    }
    else if(url === '/users') {
        res.setHeader('Content-type', 'text/html');
        res.write('<html><head><title>Users</title></head><body><h1><ul><li>Jenny</li><li>Roberto</li><li>Dav</li></ul></h1></body></html>');
        return res.end();
    }
    res.setHeader('Content-type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Some err</title></head>');
    res.write('<body><h1>Not found</h1></body>')
    res.end();
};

module.exports;