// scripts/TEntradas.js
const express = require('express');
const router = express.Router();
const { query } = require('../db');

// Insertar nueva entrada
router.post('/', async (req, res) => {
  const {
    correo,
    tipoGrupo,
    dia,
    hora,
    telefono,
    cantNino,
    cantAdolescente,
    cantJoven,
    cantAdulto,
    movilidadReducida,
    necesidadesEspeciales,
    donativos,
    precioFinal
  } = req.body;

  try {
    const sql = `
      INSERT INTO TEntrada (
        Correo, T_Grupo, Dia, Hora, Telefono,
        Cant_Nino, Cant_Adolescente, Cant_Joven, Cant_Adulto,
        Cant_Mreducida, Cant_Especial, Donativos, Precio_f
      )
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;
    const values = [
      correo, tipoGrupo, dia, hora, telefono,
      cantNino, cantAdolescente, cantJoven, cantAdulto,
      movilidadReducida, necesidadesEspeciales, donativos, precioFinal
    ];
    await query(sql, values);
    res.status(201).json({ mensaje: "Reserva registrada correctamente." });
  } catch (error) {
    console.error("Error al registrar la reserva:", error);
    res.status(500).json({ error: "Error al guardar la reserva." });
  }
});

module.exports = router;
