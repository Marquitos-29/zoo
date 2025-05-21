import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../Styles/Pages/Calendario.css";

export default function Calendario() {
  const [fechaActual, setFechaActual] = useState(new Date());
  const [eventosSemanal, setEventosSemanal] = useState([]);

  const nombreMes = fechaActual.toLocaleString("default", {
    month: "long",
    year: "numeric",
  });

  const cambiarMes = (offset) => {
    setFechaActual(
      new Date(fechaActual.getFullYear(), fechaActual.getMonth() + offset, 1)
    );
  };

  useEffect(() => {
    fetch("http://localhost:3000/api/Eventos")
      .then((res) => res.json())
      .then((data) => {
        setEventosSemanal(data);
      })
      .catch((error) =>
        console.error("Error al obtener eventos semanales:", error)
      );
  }, []);

  const getEventosDelDia = (fecha) => {
    const diaNombre = fecha.toLocaleDateString("es-ES", { weekday: "long" });

    return eventosSemanal
      .filter(
        (evento) =>
          evento?.Dia &&
          evento?.Hora &&
          evento.Dia.toLowerCase() === diaNombre.toLowerCase()
      )
      .map((evento) => {
        const [hora, minuto] = evento.Hora.split(":");
        const fechaEvento = new Date(
          fecha.getFullYear(),
          fecha.getMonth(),
          fecha.getDate(),
          parseInt(hora),
          parseInt(minuto)
        );
        return {
          titulo: evento.Nombre,
          fecha: fechaEvento,
          descripcion: `Evento semanal: ${evento.Nombre}`,
        };
      });
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
      const fechaDelDia = new Date(fechaActual.getFullYear(), fechaActual.getMonth(), d);
      const eventosDia = getEventosDelDia(fechaDelDia);

      const evento = eventosDia[0];
      const fechaStr = fechaDelDia.toISOString().split("T")[0]; // Solo la fecha
      let ruta = `/Entradas?fecha=${fechaStr}`;
      let claseEvento = "special-event";

      if (evento) {
        const tituloLower = evento.titulo.toLowerCase();
        if (tituloLower.includes("polar")) {
          ruta = `/Expedicion-Polar?fecha=${fechaStr}`;
          claseEvento += " event-polar";
        } else if (tituloLower.includes("manaties")) {
          ruta = `/Expedicion-Manatis?fecha=${fechaStr}`;
          claseEvento += " event-manaties";
        } else if (tituloLower.includes("caimanes")) {
          ruta = `/Cocodrilos?fecha=${fechaStr}`;
          claseEvento += " event-caimanes";
        }
      }

      celdas.push(
        <div key={d} className="calendar-day">
          <div className="day-number">{d}</div>
          <div className="day-events">
            <div className="evento-superior">
              {evento && (
                <Link
                  to={ruta}
                  className={`calendar-event ${claseEvento}`}
                  title={evento.descripcion}
                >
                  {evento.titulo} - {evento.fecha.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                </Link>
              )}
            </div>
            <div className="evento-inferior">
              <Link to={`/Entradas?fecha=${fechaStr}`} className="calendar-event link-event">
                Comprar entrada
              </Link>
            </div>
          </div>
        </div>
      );
    }

    return celdas;
  };

  const diasSemana = ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"];

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
