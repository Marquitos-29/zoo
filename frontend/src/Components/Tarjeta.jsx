import { useState, useEffect } from "react";
import "../styles/Components/Tarjeta.css";

export default function ModalPago({ visible, onClose, total }) {
  const [nombre, setNombre] = useState("");
  const [tarjeta, setTarjeta] = useState("");
  const [fecha, setFecha] = useState("");
  const [cvv, setCvv] = useState("");
  const [mensaje, setMensaje] = useState("");

  useEffect(() => {
    if (!visible) {
      setNombre("");
      setTarjeta("");
      setFecha("");
      setCvv("");
      setMensaje("");
    }
  }, [visible]);

  const formatearTarjeta = (num) =>
    num.replace(/\D/g, "").slice(0, 16).replace(/(.{4})/g, "$1 ").trim();

  const formatearFecha = (val) => {
    val = val.replace(/\D/g, "").slice(0, 4);
    return val.length >= 3 ? `${val.slice(0, 2)}/${val.slice(2)}` : val;
  };

  const procesarPago = async (e) => {
    e.preventDefault();
    if (!nombre || !tarjeta || !fecha || !cvv) {
      setMensaje("⚠️ Por favor, completa todos los campos.");
      return;
    }

    const form = document.getElementById("visitaForm");
    const data = {
      correo: form.email.value,
      tipoGrupo: form.otro?.checked ? form.otroTexto.value : form.tipoGrupo.value,
      dia: form.fechaReserva.value,
      hora: form.horaReserva.value,
      telefono: form.telefonoResponsable.value,
      cantNino: parseInt(form.numeroNinos.value) || 0,
      cantAdolescente: parseInt(form.numeroAdolescentes.value) || 0,
      cantJoven: parseInt(form.numeroJovenes.value) || 0,
      cantAdulto: parseInt(form.numeroAdultos.value) || 0,
      movilidadReducida: form.movilidadReducida.value,
      necesidadesEspeciales: form.necesidadesEspeciales.value,
      donativos: parseInt(form.donativos.value) || 0,
      precioFinal: total
    };

    try {
      const response = await fetch("http://localhost:3000/api/Entradas", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        const resData = await response.json();
        setMensaje(`✅ ¡Gracias, ${nombre.split(" ")[0]}! ${resData.mensaje} 🐾`);
      } else {
        setMensaje("❌ No se pudo procesar tu reserva. Inténtalo más tarde.");
      }
    } catch (error) {
      console.error("Error al enviar la reserva:", error);
      setMensaje("❌ Error de conexión con el servidor.");
    }
  };

  if (!visible) return null;

  return (
    <div className="modal-pago-overlay">
      <div className="modal-pago">
        <button className="btn-cerrar" onClick={onClose}>✖</button>
        {!mensaje.startsWith("✅") ? (
          <>
            <h2>💳 Completa tu pago</h2>
            <form onSubmit={procesarPago} className="form-pago">
              <input
                type="text"
                placeholder="Número de tarjeta"
                value={tarjeta}
                onChange={(e) => setTarjeta(formatearTarjeta(e.target.value))}
              />
              <input
                type="text"
                placeholder="Nombre del titular"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
              />
              <div className="fila-doble">
                <input
                  type="text"
                  placeholder="MM/AA"
                  value={fecha}
                  onChange={(e) => setFecha(formatearFecha(e.target.value))}
                />
                <input
                  type="text"
                  placeholder="CVV"
                  value={cvv}
                  onChange={(e) => setCvv(e.target.value.replace(/\D/g, "").slice(0, 3))}
                />
              </div>
              <button type="submit" className="btn-pagar">Pagar {total ? `€${total}` : "€0"}</button>
            </form>
            {mensaje && <p className="mensaje-pago">{mensaje}</p>}
          </>
        ) : (
          <div className="mensaje-final">
            <h2>{mensaje}</h2>
            <p>📩 Recibirás un correo de confirmación con los detalles de tu reserva.</p>
            <p>¡Te esperamos en el zoo! 🐒🦜🦁</p>
          </div>
        )}
      </div>
    </div>
  );
}
