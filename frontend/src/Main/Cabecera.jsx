// Main/Cabecera.jsx

import { useLocation, Link, Outlet } from "react-router-dom";
import Pie from "./Pie";
import "../Styles/Cabecera.css";

export default function Cabecera() {
  const location = useLocation();
  const mostrarNav = location.pathname !== "/Pasarela";

  return (
    <>
      <header className="zoo-header">
        <h1>Zoológico Maravillas</h1>
      </header>

      {mostrarNav && (
        <nav className="zoo-nav">
          <Link to="/main">Inicio</Link>
          <Link to="/Calendario">Ver calendario</Link>

          <div className="dropdown">
            <button className="dropbtn">Descúbrenos</button>
            <div className="dropdown-content">
              <Link to="/animales">Nuestros Animales</Link>
              <Link to="/ecosistemas">Ecosistemas</Link>
              <Link to="/interacciones">Interacciones</Link>
            </div>
          </div>

          <Link to="/contacto">Contacto</Link>
        </nav>
      )}

      <main className="main-content">
        <Outlet />
      </main>

      <Pie />
    </>
  );
}
