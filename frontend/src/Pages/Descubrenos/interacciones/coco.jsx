import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../../Styles/Pages/Descubrenos/inter/coco.css";

const CaimanExperience = () => {
  return (
    <div className="container">
      <h1 style={{ textAlign: "center", color: "#388e3c", marginBottom: 30 }}>
        <i className="fa-solid fa-water"></i> Experiencia viendo comer a los caimanes <i className="fa-solid fa-water"></i>
      </h1>
      <div className="cards-caiman">
        <div className="card-caiman">
          {/* Icono de caimán (fa-dragon como sustituto) */}
          <div style={{ fontSize: "5rem", color: "#388e3c", marginBottom: 18 }}>
            <i className="fa-solid fa-dragon"></i>
          </div>
          <h2>Sobre los Caimanes</h2>
          <div className="info">
            Los caimanes son reptiles semiacuáticos de la familia de los aligatóridos. Son conocidos por su poderosa mandíbula, su piel escamosa y su comportamiento sigiloso. Observarlos durante la alimentación es una oportunidad única para aprender sobre su biología, hábitos y el papel fundamental que desempeñan en los ecosistemas acuáticos.
          </div>
          <h3 style={{ color: "#388e3c", marginTop: 18 }}>Normas para la experiencia</h3>
          <ul>
            <li>Mantenerse siempre detrás de las barreras de seguridad.</li>
            <li>No arrojar objetos ni comida a los caimanes.</li>
            <li>Seguir las indicaciones del personal en todo momento.</li>
            <li>No gritar ni hacer movimientos bruscos cerca del recinto.</li>
            <li>Prohibido el uso de flashes fotográficos.</li>
            <li>Actividad recomendada para mayores de 6 años.</li>
          </ul>
        </div>
        <div className="card-caiman">
          {/* Icono de ticket para entradas */}
          <div style={{ fontSize: "5rem", color: "#388e3c", marginBottom: 18 }}>
            <i className="fa-solid fa-ticket"></i>
          </div>
          <h2>Entradas y Condiciones</h2>
          <div className="info">
            <b>¡Vive la emoción de ver a los caimanes en acción!</b>
            <br />
            El precio de la experiencia es de:
          </div>
          <div className="precio">
            15€ <span style={{ fontSize: "1rem", color: "#388e3c" }}>(actividad disponible sábados y domingos)</span>
          </div>
          <ul>
            <li>Las entradas solo se pueden adquirir en taquilla.</li>
            <li>Plazas limitadas por grupo.</li>
            <li>Actividad sujeta a condiciones meteorológicas.</li>
          </ul>
          <div style={{ marginTop: 18, color: "#388e3c", fontWeight: "bold" }}>
            ¡No te pierdas este espectáculo natural y educativo!
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaimanExperience;
