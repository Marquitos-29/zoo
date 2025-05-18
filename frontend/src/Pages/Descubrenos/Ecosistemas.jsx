import "../../Styles/Pages/Descubrenos/Ecosistemas.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTree,
  faWater,
  faMountainSun,
  faSnowflake,
  faLeaf,
} from "@fortawesome/free-solid-svg-icons";

export default function Ecosistemas() {
  return (
    <div className="ecosistemas-container">
      <div className="ecosistemas-header">
        <h2>Ecosistemas de nuestro zoo</h2>
        <p>
          Descubre los hábitats que recreamos para el bienestar de nuestros
          animales y la educación de nuestros visitantes.
        </p>
      </div>
      <div className="ecosistemas-cards">
        <div className="ecosistema-card">
          <FontAwesomeIcon icon={faTree} className="eco-icon green" />
          <h3>Selva Tropical</h3>
          <p>
            Un ecosistema exuberante y húmedo, hogar de especies como monos,
            tucanes, ranas y jaguares. Aquí podrás experimentar la diversidad y
            el bullicio de la selva, rodeado de vegetación densa y sonidos
            exóticos.
          </p>
        </div>

        <div className="ecosistema-card">
          <FontAwesomeIcon icon={faWater} className="eco-icon blue" />
          <h3>Río y Humedales</h3>
          <p>
            Espacios dedicados a manatíes, caimanes, tortugas y aves acuáticas.
            Este ecosistema reproduce lagunas y ríos, mostrando la importancia
            del agua dulce y la vida que alberga.
          </p>
        </div>

        <div className="ecosistema-card">
          <FontAwesomeIcon icon={faMountainSun} className="eco-icon brown" />
          <h3>Sabana Africana</h3>
          <p>
            Un paisaje abierto con pastizales y acacias, donde conviven jirafas,
            cebras, leones y elefantes. Descubre cómo estos animales se adaptan
            a la vida en la sabana y la importancia de la conservación.
          </p>
        </div>

        <div className="ecosistema-card">
          <FontAwesomeIcon icon={faSnowflake} className="eco-icon cyan" />
          <h3>Región Polar</h3>
          <p>
            Un ambiente frío y nevado, ideal para pingüinos y focas. Aprende
            sobre la vida en los polos y los retos que enfrentan estas especies
            debido al cambio climático.
          </p>
        </div>

        <div className="ecosistema-card">
          <FontAwesomeIcon icon={faLeaf} className="eco-icon green" />
          <h3>Bosque Mediterráneo</h3>
          <p>
            Un ecosistema típico de nuestra región, con encinas, alcornoques y
            fauna autóctona como linces, jabalíes y aves rapaces. Un espacio
            para valorar la biodiversidad local.
          </p>
        </div>
      </div>
    </div>
  );
}
