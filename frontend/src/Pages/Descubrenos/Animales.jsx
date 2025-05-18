// Pages/Animales.jsx
import "../../Styles/Pages/Animales.css";

const animalesMock = [
  {
    nombre: "León",
    imagen: "/leon.jpg",
    descripcion: "Gran felino africano que vive en manadas y es muy territorial.",
    dato: "Los leones duermen hasta 20 horas al día.",
  },
  {
    nombre: "Elefante",
    imagen: "/elefante.jpg",
    descripcion: "Son los mamíferos terrestres más grandes y muy inteligentes.",
    dato: "¡Pueden reconocer su reflejo en un espejo!",
  },
  {
    nombre: "Loro",
    imagen: "/loro.jpg",
    descripcion: "Un ave colorida y parlanchina que encanta a todos.",
  },
  {
    nombre: "Tigre",
    imagen: "/tigre.jpg",
    descripcion: "Un depredador ágil y poderoso con un pelaje rayado único.",
  },
  {
    nombre: "Jirafa",
    imagen: "/jirafa.jpg",
    descripcion: "Es el animal más alto del mundo, gracias a su largo cuello.",
    dato: "Su lengua puede medir hasta 45 cm.",
  },
  {
    nombre: "Cebra",
    imagen: "/cebra.jpg",
    descripcion: "Famosa por sus rayas únicas, cada una tiene un patrón diferente.",
  },
];

export default function Animales() {
  return (
    <div className="container">
      <div className="animals">
        {animalesMock.map((animal, index) => (
          <div className="animal-card" key={index}>
            <img src={animal.imagen} alt={animal.nombre} />
            <h3>{animal.nombre}</h3>
            <p>{animal.descripcion}</p>
            {animal.dato && <p><strong>Dato curioso:</strong> {animal.dato}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}
