import { useEffect, useState } from "react";
import Tarjeta from "../Components/Tarjeta";
import "../Styles/Pages/Entradas.css";

export default function FormularioReserva() {
  const [modalVisible, setModalVisible] = useState(false);
  const [totalPago, setTotalPago] = useState(0);

  useEffect(() => {
    const otroRadio = document.getElementById("otro");
    const otroTexto = document.getElementById("otroTexto");
    const radios = document.querySelectorAll('input[name="tipoGrupo"]');

    function toggleOtro() {
      if (otroRadio?.checked) {
        otroTexto.style.display = "inline-block";
        otroTexto.required = true;
      } else {
        otroTexto.style.display = "none";
        otroTexto.required = false;
      }
    }

    radios.forEach(r => r.addEventListener("change", toggleOtro));
    toggleOtro();

    // Autorellenar fecha desde la URL
    const getParameterByName = (name) => {
      const url = window.location.href;
      name = name.replace(/[\[\]]/g, '\\$&');
      const regex = new RegExp(`[?&]${name}(=([^&#]*)|&|#|$)`),
        results = regex.exec(url);
      if (!results) return null;
      if (!results[2]) return '';
      return decodeURIComponent(results[2].replace(/\+/g, ' '));
    };

    const fechaParam = getParameterByName("fecha");
    if (fechaParam) {
      const inputFecha = document.getElementById("fechaReserva");
      if (inputFecha) inputFecha.value = fechaParam;
    }
  }, []);

  const calcularTotalYMostrarModal = (e) => {
    e.preventDefault();
    const ninos = parseInt(document.getElementById('numeroNinos').value) || 0;
    const adolescentes = parseInt(document.getElementById('numeroAdolescentes').value) || 0;
    const jovenes = parseInt(document.getElementById('numeroJovenes').value) || 0;
    const adultos = parseInt(document.getElementById('numeroAdultos').value) || 0;
    const total = (ninos * 7) + (adolescentes * 15) + (jovenes * 20) + (adultos * 25);
    setTotalPago(total);
    setModalVisible(true);
  };

  return (
    <div className={`header ${modalVisible ? "fondo-oscuro" : ""}`}>
      <i className="fa-solid fa-paw icon-large"></i>
      <h1>Reserva tu Aventura en el Zoológico</h1>
      <div className="zoo-divider"></div>
      <p>¡Bienvenido! Completa el siguiente formulario para asegurar tu entrada y vivir una experiencia inolvidable rodeado de naturaleza y animales.</p>
      <p className="required-note"><span className="required">*</span> Campo obligatorio</p>

      <form id="visitaForm" onSubmit={calcularTotalYMostrarModal} autoComplete="off">
        <div className="form-zoo-container">

          {/* Columna 1 */}
          <div className="form-column">
            <div className="form-group">
              <label htmlFor="email"><i className="fa-solid fa-envelope icon"></i> Correo electrónico <span className="required">*</span></label>
              <input type="email" id="email" name="email" required />
              <p>Te enviaremos la confirmación aquí.</p>
            </div>

            <div className="form-group">
              <label><i className="fa-solid fa-users icon"></i> Tipo de grupo <span className="required">*</span></label>
              <div className="radio-group">
                {["Familia", "Grupo educativo", "Otros", "Otro"].map((tipo, idx) => (
                  <div className="radio-inline" key={idx}>
                    <input type="radio" id={tipo.toLowerCase()} name="tipoGrupo" value={tipo} required={idx === 0} />
                    <label htmlFor={tipo.toLowerCase()}>{tipo}</label>
                    {tipo === "Otro" && (
                      <input type="text" id="otroTexto" name="otroTexto" placeholder="Especifique" style={{ display: 'none', width: '60%' }} />
                    )}
                  </div>
                ))}
              </div>
              <p>Selecciona la opción que mejor describa tu grupo.</p>
            </div>

            <div className="form-group">
              <label htmlFor="fechaReserva"><i className="fa-solid fa-calendar-days icon"></i> Día de la reserva <span className="required">*</span></label>
              <input type="date" id="fechaReserva" name="fechaReserva" required />
              <p>Elige la fecha de tu visita.</p>
            </div>

            <div className="form-group">
              <label htmlFor="horaReserva"><i className="fa-solid fa-clock icon"></i> Hora de la reserva <span className="required">*</span></label>
              <input type="time" id="horaReserva" name="horaReserva" required />
              <p>Selecciona la hora de llegada.</p>
            </div>

            <div className="form-group">
              <label htmlFor="telefonoResponsable"><i className="fa-solid fa-phone icon"></i> Teléfono de contacto <span className="required">*</span></label>
              <input type="tel" id="telefonoResponsable" name="telefonoResponsable" required pattern="[0-9]{9}" maxLength="9" inputMode="numeric" />
              <p>Por si necesitamos contactarte.</p>
            </div>
          </div>

          {/* Columna 2 */}
          <div className="form-column">
            <div className="form-group" style={{ display: 'flex', gap: '8px' }}>
              {[
                ["Niños (0-12)", "numeroNinos", "fa-child"],
                ["Adolescentes (12-18)", "numeroAdolescentes", "fa-user-graduate"],
                ["Jóvenes (18-30)", "numeroJovenes", "fa-user"],
                ["Adultos", "numeroAdultos", "fa-user-tie"]
              ].map(([label, id, icon], idx) => (
                <div key={idx} style={{ flex: 1 }}>
                  <label htmlFor={id}><i className={`fa-solid ${icon} icon`}></i> {label} <span className="required">*</span></label>
                  <input type="number" id={id} name={id} min="0" required />
                </div>
              ))}
            </div>

            <div className="form-group">
              <label htmlFor="movilidadReducida"><i className="fa-solid fa-wheelchair icon"></i> ¿Personas con movilidad reducida?</label>
              <textarea id="movilidadReducida" name="movilidadReducida" rows="2" placeholder="¿Cuántas? ¿Qué ayuda necesitan?" />
            </div>

            <div className="form-group">
              <label htmlFor="necesidadesEspeciales"><i className="fa-solid fa-heart icon"></i> ¿Necesidades educativas especiales?</label>
              <textarea id="necesidadesEspeciales" name="necesidadesEspeciales" rows="2" placeholder="¿Cuántas? ¿Qué adaptación requieren?" />
            </div>

            <div className="form-group" style={{ display: 'flex', gap: '8px' }}>
              <label htmlFor="donativos"><i className="fa-solid fa-hand-holding-dollar icon"></i> Donativos</label>
              <div className="input-euro" style={{ display: 'flex', alignItems: 'center', gap: '4px', width: '100%' }}>
                <input type="number" id="donativos" name="donativos" min="0" style={{ flex: 1 }} />
                <span style={{ fontSize: '1.1em', color: '#3d5a1a' }}>€</span>
              </div>
            </div>
          </div>

          <div style={{ gridColumn: '1/-1', display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
            <button type="submit" className="submit-btn">
              <i className="fa-solid fa-ticket icon"></i> Comprar entrada
            </button>
          </div>

          <div className="info-box">
            <h2><i className="fa-solid fa-hippo icon"></i> Normas para la reserva</h2>
            <ul>
              <li><b>Donativo:</b> 8€ por persona (menores de 5 años gratis).</li>
              <li><b>Grupo:</b> mínimo 5, máximo 15 personas.</li>
              <li><b>Duración:</b> 1h 30min aprox.</li>
              <li><b>Pago previo:</b> Concepto: nombre del grupo y nº de personas. Cuenta: <b>ES** **** **** **** **** ****</b> (Ibercaja).</li>
              <li>Recibirás confirmación por email tras enviar el formulario y comprobante de pago.</li>
            </ul>
            <p>¡Gracias por elegirnos para tu aventura natural!</p>
            <p className="legal">Tus datos serán tratados según la legislación vigente. Contacto: <a href="mailto:privacidadzoologico@gmail.es">privacidadzoologico@gmail.es</a> o Av. de las Comunidades, 28, Vicálvaro, 28032 Madrid.</p>
          </div>
        </div>
      </form>

      <Tarjeta
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        total={totalPago}
      />
    </div>
  );
}
