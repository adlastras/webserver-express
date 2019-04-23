const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

hbs.registerPartials(__dirname + '/views/parcials');

app.set('view engine', 'hbs');
//app.get('/', (req, res) => {
//    let out = {
//        nombre: 'Alberto',
//        edad: 37,
//        url: req.url
//    };
//    res.send(out);
//});

// app.get('/data', (req, res) => {
//     res.send('Hola Alberto');
// });

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'alberto delgado'
    });
});

app.get('/about', (req, res) => {
    res.render('about');
});

// app.get('/data', (req, res) => {
//     res.send('Hola Alberto');
// });

app.listen(port, () => {
    console.log(`Escuchando en el puerto ${port}`);
});