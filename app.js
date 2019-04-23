const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    let out = {
        nombre: 'Alberto',
        edad: 37,
        url: req.url
    };
    res.write(JSON.stringify(out));
    //res.write('Hola Alberto');
    res.end();
}).listen(8080);

console.log('Se está escuchando por el puerto 8080');