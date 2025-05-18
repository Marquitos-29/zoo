import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Cabecera from "./Main/Cabecera";
import Index from "./Pages/Index";

import Calendario from "./Pages/Calendario";

import Animales from "./Pages/Descubrenos/Animales";
import Ecosistemas from "./Pages/Descubrenos/Ecosistemas";
import Interacciones from "./Pages/Descubrenos/Interacciones";

import Contacto from "./Pages/Contacto";

import "./Styles/General.css";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Cabecera />}>
          <Route path="/" element={<Index />} />
          <Route path="/Calendario" element={<Calendario />} />
          <Route path="/Animales" element={<Animales />} />
          <Route path="/Ecosistemas" element={<Ecosistemas />} />
          <Route path="/Interacciones" element={<Interacciones />} />
          <Route path="/Contacto" element={<Contacto />} />
        </Route>
      </Routes>
    </Router>
  );
}
