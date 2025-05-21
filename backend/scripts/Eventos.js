// scripts/EventosSem.js
const express = require("express");
const router = express.Router();
const { query } = require("../db");

// Obtener eventos semanales
router.get("/", async (req, res) => {
  try {
    const results = await query("SELECT Nombre, Hora, Dia FROM TEventos");
    res.json(results);
  } catch (error) {
    console.error("Error al obtener los eventos semanales:", error);
    res.status(500).json({ error: "Error al obtener los eventos semanales" });
  }
});

module.exports = router;
