require('dotenv').config();
const express = require('express');
const hbs = require('hbs');

const app = express()
const port = process.env.PORT;


// Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

// Servir contenido estatico
app.use(express.static('public'));


// app.get('/', (req, res) => {
//     res.send('Home Page')
// });

// app.get('/hola-mundo', (req, res) => {
//     res.send('Hello World en su respectiva ruta')
// });

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Thomas Chavez',
        titulo: 'Curso de Node'
    });
});

app.get('/generic', (req, res) => {
    res.render('generic', {
        nombre: 'Thomas Chavez',
        titulo: 'Curso de Node'
    });
});

app.get('/elements', (req, res) => {
    res.render('elements', {
        nombre: 'Thomas Chavez',
        titulo: 'Curso de Node'
    });
});

app.get('*', (req, res) => {
    res.send('404 | Page Not Found')
});

app.listen(port, () => {
    console.log(`App corriendo en el puerto ${port}`);
})