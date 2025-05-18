// Pages/Calendario.jsx
import { useEffect, useState } from "react";
import "../Styles/Pages/Calendario.css"

const eventosIniciales = [
  {
    titulo: "VISITA CULTURAL, 11:15 h",
    fecha: new Date(new Date().getFullYear(), 3, 1, 11, 15),
    descripcion: "",
  },
  {
    titulo: "VISITA TEMÁTICA DÍA DEL LIBRO, 12:45 h",
    fecha: new Date(new Date().getFullYear(), 3, 23, 12, 45),
    descripcion: "Actividad especial del Día del Libro",
  },
];

export default function Calendario() {
  const [fechaActual, setFechaActual] = useState(new Date());
  const [eventos, setEventos] = useState(eventosIniciales);

  const nombreMes = fechaActual.toLocaleString("default", {
    month: "long",
    year: "numeric",
  });

  const cambiarMes = (offset) => {
    setFechaActual(
      new Date(fechaActual.getFullYear(), fechaActual.getMonth() + offset, 1)
    );
  };

  const diasSemana = ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"];

  const getEventosDelDia = (dia) => {
    return eventos.filter(
      (ev) =>
        ev.fecha.getFullYear() === fechaActual.getFullYear() &&
        ev.fecha.getMonth() === fechaActual.getMonth() &&
        ev.fecha.getDate() === dia
    );
  };

  const renderDias = () => {
    const primerDia = new Date(fechaActual.getFullYear(), fechaActual.getMonth(), 1);
    const inicio = (primerDia.getDay() + 6) % 7;
    const diasEnMes = new Date(fechaActual.getFullYear(), fechaActual.getMonth() + 1, 0).getDate();

    const celdas = [];

    for (let i = 0; i < inicio; i++) {
      celdas.push(<div key={`empty-${i}`} className="calendar-day empty"></div>);
    }

    for (let d = 1; d <= diasEnMes; d++) {
      const eventosDia = getEventosDelDia(d);
      celdas.push(
        <div key={d} className="calendar-day">
          <div className="day-number">{d}</div>
          <div className="day-events">
            {eventosDia.map((ev, idx) => (
              <div
                key={idx}
                className={`calendar-event ${
                  ev.fecha.getHours() === 11 && ev.fecha.getMinutes() === 15
                    ? ""
                    : "special-event"
                }`}
                title={ev.descripcion}
              >
                {ev.titulo}
              </div>
            ))}
          </div>
        </div>
      );
    }

    return celdas;
  };

  return (
    <div id="calendar-container">
      <div id="calendar-title">{nombreMes}</div>
      <div id="calendar-controls">
        <button onClick={() => cambiarMes(-1)}>&laquo; Anterior</button>
        <button onClick={() => cambiarMes(1)}>Siguiente &raquo;</button>
      </div>
      <div id="calendar">
        {diasSemana.map((dia, idx) => (
          <div key={idx} className="calendar-header">
            {dia}
          </div>
        ))}
        {renderDias()}
      </div>
    </div>
  );
}
