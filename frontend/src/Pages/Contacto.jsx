// Pages/Contacto.jsx
import { useState } from "react";
import "../Styles/Pages/Contacto.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
  faClock,
  faGlobe,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";

export default function Contacto() {
  const [mensajeEnviado, setMensajeEnviado] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    setMensajeEnviado(true);
    setTimeout(() => setMensajeEnviado(false), 4000);
  };

  return (
    <div className="container-contacto">
      <h1>
        <FontAwesomeIcon icon={faEnvelope} /> Contacto
      </h1>

      <div className="contact-info">
        <div>
          <FontAwesomeIcon icon={faLocationDot} />
          Dirección: Calle Fauna 123, Ciudad Animalia
        </div>
        <div>
          <FontAwesomeIcon icon={faPhone} />
          Teléfono:{" "}
          <a href="tel:+34123456789">+34 123 456 789</a>
        </div>
        <div>
          <FontAwesomeIcon icon={faEnvelope} />
          Email:{" "}
          <a href="mailto:info@zoologicomaravillas.com">
            info@zoologicomaravillas.com
          </a>
        </div>
        <div>
          <FontAwesomeIcon icon={faClock} />
          Horario: Lunes a Domingo, 10:00 - 19:00
        </div>
        <div>
          <FontAwesomeIcon icon={faGlobe} />
          Web:{" "}
          <a
            href="https://www.zoologicomaravillas.com"
            target="_blank"
            rel="noreferrer"
          >
            www.zoologicomaravillas.com
          </a>
        </div>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <label htmlFor="nombre">Nombre</label>
        <input type="text" id="nombre" name="nombre" required />

        <label htmlFor="email">Tu Correo electrónico</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="mensaje">Mensaje</label>
        <textarea id="mensaje" name="mensaje" required></textarea>

        <button type="submit">
          <FontAwesomeIcon icon={faPaperPlane} /> Enviar mensaje
        </button>
      </form>

      {mensajeEnviado && (
        <div className="mensaje-exito">
          ¡Gracias por contactarnos! Te responderemos pronto.
        </div>
      )}

      <div className="mapa">
        <iframe
          src="https://www.openstreetmap.org/export/embed.html?bbox=-3.7038%2C40.4168%2C-3.6938%2C40.4268&amp;layer=mapnik"
          style={{ width: "100%", height: "220px", border: 0 }}
          title="Mapa"
        ></iframe>
      </div>
    </div>
  );
}
