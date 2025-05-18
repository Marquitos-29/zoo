// Pages/Animales.jsx
import { useEffect, useState } from "react";
import "../../Styles/Pages/Animales.css";

export default function Animales() {
  const [animales, setAnimales] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/animales") // Ajusta si usas proxy
      .then((res) => res.json())
      .then((data) => setAnimales(data))
      .catch((error) => console.error("Error al obtener animales:", error));
  }, []);

  return (
    <div className="container">
      <div className="animals">
        {animales.map((animal, index) => (
          <div className="animal-card" key={animal.Id}>
            <img src={animal.L_Foto?.trim() || "/animales/default.jpg"} alt={animal.Nombre} />
            <h3>{animal.Nombre}</h3>
            <p>{animal.Descripcion}</p>
            {animal.Dato && <p><strong>Dato curioso:</strong> {animal.Dato}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}