// app.js
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());


// Rutas del zoológico
app.use('/api/animales', require('./scripts/Animales'));

module.exports = app;
