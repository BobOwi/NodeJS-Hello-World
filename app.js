'use strict';

const express = require('express');
const ejs = require('ejs');

// Constants
const PORT = 80;
// const HOST = '4ahel.peball.info';

// App
const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.listen(PORT);

app.get('/', (req, res) => {
    res.render('pages/index', {
        pageTitle: 'Dynamischer Titel | NodeJS Testpage',
        title: 'Meine dynamische NodeJS Testhomepage',
        users: [{
            name: 'David Peball',
            age: 17,
            gender: 'm'
        }, {
            name: 'Sebastian Naschberger',
            age: 17,
            gender: 'm'
        }, {
            name: 'Katarina Mrsic',
            age: 17,
            gender: 'w'
        }, {
            name: 'Robert Oberwinkler',
            age: 23,
            gender: 'm'
        }]
    });
});

console.log(`Running on port ${PORT}`);