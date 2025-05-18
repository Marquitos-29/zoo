import "../../Styles/Pages/Descubrenos/Interacciones.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faKiwiBird,
  faHippo,
  faDragon,
} from "@fortawesome/free-solid-svg-icons";

export default function Interacciones() {
  return (
    <div className="container interacciones">
      <h2>Interacciones</h2>
      <p>
        Vive la experiencia de interactuar y aprender con nuestros animales.
        Descubre nuestras experiencias exclusivas como la Expedición Polar y la
        Experiencia con manatíes.
      </p>

      <div className="cards">
        <div className="card">
          <div className="card-icon blue">
            <FontAwesomeIcon icon={faKiwiBird} />
          </div>
          <div className="card-content">
            <h3>Expedición polar</h3>
            <a href="/expedicion-polar" className="btn">
              Ver más
            </a>
          </div>
        </div>

        <div className="card">
          <div className="card-icon teal">
            <FontAwesomeIcon icon={faHippo} />
          </div>
          <div className="card-content">
            <h3>Experiencia con manatíes</h3>
            <a href="/experiencia-manaties" className="btn">
              Ver más
            </a>
          </div>
        </div>

        <div className="card">
          <div className="card-icon green">
            <FontAwesomeIcon icon={faDragon} />
          </div>
          <div className="card-content">
            <h3>Ver comer a los caimanes</h3>
            <a href="/experiencia-caimanes" className="btn">
              Ver más
            </a>
          </div>
        </div>
      </div>

      <div className="proximamente">
        <p>Dentro de poco más eventos/interacciones con nuestros animales</p>
      </div>
    </div>
  );
}
