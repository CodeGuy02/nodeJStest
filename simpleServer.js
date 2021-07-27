const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res) => {
    //console.log(req);
    const url = req.url;
    const method = req.method;
    if (url === '/') {
        res.write('<html>');
        res.write('<head><title>Enter Message</title></head>');
        res.write('<body><form action="/message" method="POST"> <input type="text" name="message"> </input> <button type="submit"> Send </button></form></body>')
        res.write('</head>');
        return res.end();
    }

    if (url === '/message' && method === 'POST') {
        fs.writeFileSync('message.txt', 'DUMMY TEXT');
        res.statusCode = 302; // status code 302: redirection
        res.setHeader('Location', '/');
        return res.end();
    }

    res.setHeader('Content-Type', 'text/html')
    res.write('<html>');
    res.write('<head> <title> First Node JS Server </title></head>');
    res.write('<body> <h1> Hello World! </h1> </body>');
    res.write('</html>');
    res.end();
})

server.listen(2600)