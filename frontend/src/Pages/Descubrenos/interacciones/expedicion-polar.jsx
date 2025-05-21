import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../../Styles/Pages/Descubrenos/inter/polar.css";

const ExpedicionPolar = () => {
  return (
    <div className="expedicion-polar-wrapper">
      <div className="expedicion-polar-container">
        <h1 className="expedicion-title">
          <i className="fa-solid fa-icicles"></i> Expedición Polar: Dormir con Pingüinos <i className="fa-solid fa-icicles"></i>
        </h1>

        <div className="cards-polar">
          {/* Card 1 */}
          <div className="card-polar">
            <div className="card-icon">
              <i className="fa-solid fa-kiwi-bird"></i>
            </div>
            <h2 className="card-title">Sobre los Pingüinos</h2>
            <div className="card-info">
              Los pingüinos son aves marinas que no vuelan, adaptadas a la vida en el agua y el frío. Son famosos por su elegante plumaje blanco y negro, su andar divertido y su increíble capacidad para nadar. En nuestra Expedición Polar podrás observarlos de cerca y aprender sobre su comportamiento, alimentación y curiosidades.
            </div>
            <h3 style={{ color: "#1976d2", marginTop: 18 }}>Normas para dormir con los pingüinos</h3>
            <ul className="card-list">
              <li>Respetar el silencio y no molestar a los animales durante la noche.</li>
              <li>No se permite el uso de flashes ni luces intensas.</li>
              <li>Está prohibido alimentar o tocar a los pingüinos.</li>
              <li>Seguir siempre las indicaciones del personal del zoológico.</li>
              <li>La actividad es solo para mayores de 8 años.</li>
              <li>Traer saco de dormir y ropa de abrigo.</li>
            </ul>
          </div>

          {/* Card 2 */}
          <div className="card-polar">
            <div className="card-icon">
              <i className="fa-solid fa-ticket"></i>
            </div>
            <h2 className="card-title">Entradas y Condiciones</h2>
            <div className="card-info">
              <b>¡Vive una noche única entre pingüinos!</b><br />
              El precio de la entrada para la Expedición Polar es de:
            </div>
            <div className="card-price">
              30€ <span style={{ fontSize: "1rem" }}>(solo disponible los viernes)</span>
            </div>
            <ul className="card-list">
              <li>Las entradas solo se pueden adquirir en taquilla.</li>
              <li>Plazas limitadas por noche.</li>
              <li>Consulta disponibilidad antes de tu visita.</li>
            </ul>
            <div className="card-footer">
              ¡No te pierdas la oportunidad de dormir rodeado de pingüinos!
            </div>
          </div>
        </div>
      </div>

      {/* Font Awesome CDN */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
      />
    </div>
  );
};

export default ExpedicionPolar;
