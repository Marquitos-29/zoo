// scripts/Animales.js
const express = require('express');
const router = express.Router();
const { query } = require('../db');

// Obtener todos los animales
router.get('/', async (req, res) => {
  try {
    const results = await query('SELECT * FROM TAnimal');
    res.json(results);
  } catch (error) {
    console.error('Error al obtener los animales:', error);
    res.status(500).json({ error: 'Error al obtener los animales' });
  }
});


module.exports = router;
