//Pages/Index.jsx

import "../Styles/Pages/index.css";

export default function Index() {
  return (
    <>
      <div className="hero">
        <h2>¡Descubre el mundo animal!</h2>
      </div>

      <div className="container">
        <section id="inicio" className="section">
          <h2>Bienvenidos</h2>
          <p>
            En el Zoológico Maravillas, te invitamos a explorar la diversidad de la fauna mundial.
            Desde majestuosos leones hasta coloridos loros, tenemos algo para todos los amantes de los animales.
          </p>
        </section>

        <section id="animales" className="section">
          <h2>Nuestros Animales</h2>
          <div className="animals">
            <AnimalCard src="/animales/leon.jpg" nombre="León" desc="El rey de la selva, conocido por su imponente melena y rugido." />
            <AnimalCard src="/animales/elefante.jpg" nombre="Elefante" desc="El gigante gentil, famoso por su memoria y trompa versátil." />
            <AnimalCard src="/animales/loro.jpg" nombre="Loro" desc="Un ave colorida y parlanchina que encanta a todos." />
            <AnimalCard src="/animales/tigre.jpg" nombre="Tigre" desc="Un depredador ágil y poderoso con un pelaje rayado único." />
            <AnimalCard src="/animales/jirafa.jpg" nombre="Jirafa" desc="El animal más alto del mundo, conocido por su largo cuello." />
            <AnimalCard src="/animales/cebra.jpg" nombre="Cebra" desc="Famosa por sus rayas únicas, cada una tiene un patrón diferente." />
          </div>
        </section>
      </div>
    </>
  );
}

// Subcomponente para tarjetas de animales
function AnimalCard({ src, nombre, desc }) {
  return (
    <div className="animal-card">
      <img src={src} alt={nombre} />
      <h3>{nombre}</h3>
      <p>{desc}</p>
    </div>
  );
}
