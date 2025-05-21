import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWater, faHippo, faTicket } from "@fortawesome/free-solid-svg-icons";
import "../../../Styles/Pages/Descubrenos/inter/manaties.css";

const ExperienciaManaties = () => {
  return (
    <div className="manati-container">
      <h1 className="manati-title">
        <FontAwesomeIcon icon={faWater} /> Experiencia con Manatíes{" "}
        <FontAwesomeIcon icon={faWater} />
      </h1>
      <div className="cards-manati">
        {/* Card 1 */}
        <div className="card-manati">
          <div className="card-icon">
            <FontAwesomeIcon icon={faHippo} />
          </div>
          <h2>Sobre los Manatíes</h2>
          <div className="info">
            Los manatíes, conocidos como "vacas marinas", son mamíferos acuáticos tranquilos y curiosos que habitan en aguas cálidas y poco profundas. Se alimentan principalmente de plantas acuáticas y pueden llegar a medir hasta 4 metros y pesar más de 500 kg. Son animales muy sociables y nadar junto a ellos es una experiencia única y relajante.
          </div>
          <h3 className="section-subtitle">Normas para nadar con manatíes</h3>
          <ul>
            <li>Está prohibido montar o sujetarse a los manatíes.</li>
            <li>No se debe molestar ni perseguir a los animales.</li>
            <li>Evita movimientos bruscos y ruidos fuertes en el agua.</li>
            <li>No se permite alimentar a los manatíes.</li>
            <li>Usa solo protector solar biodegradable.</li>
            <li>Sigue siempre las indicaciones de los monitores.</li>
          </ul>
        </div>

        {/* Card 2 */}
        <div className="card-manati">
          <div className="icon">
            <FontAwesomeIcon icon={faTicket} />
          </div>
          <h2>Entradas y Condiciones</h2>
          <div className="info">
            <b>¡Nada junto a los manatíes y vive una experiencia inolvidable!</b><br />
            El precio de la experiencia es de:
          </div>
          <div className="precio">
            40€ <span>(actividad disponible sábados y domingos)</span>
          </div>
          <ul>
            <li>Las entradas solo se pueden adquirir en taquilla.</li>
            <li>Plazas limitadas por grupo.</li>
            <li>Es obligatorio saber nadar.</li>
          </ul>
          <div className="mensaje-final">
            ¡Sumérgete y conoce a estos increíbles gigantes del agua!
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienciaManaties;
