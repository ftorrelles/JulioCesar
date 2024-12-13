import React from "react";
import "../styles/aboutUs.css"; // Asegúrate de tener este archivo CSS en tu proyecto

const AboutUs = () => {
  return (
    <div className="about-container">
      <div className="about-image">
        {/* Puedes cambiar la imagen por una más relevante */}
        <img src="/Julio.jpg" alt="Julio Cesar" />
      </div>
      <div className="about-content">
        <h2>Sobre Julio Cesar</h2>
        <p>
          Julio César es un terapeuta especializado en adicciones con más de 15
          años de experiencia, dedicado a guiar a sus pacientes hacia la
          recuperación y el bienestar integral. ofrece programas de
          resocialización y recuperación personalizada, tanto en persona como en
          línea. Este método integral asegura tratamientos efectivos que abordan
          todas las facetas de la adicción, ofreciendo también apoyo continuo
          para maximizar el potencial de cada individuo.
          <br />
          <br /> Comprometido con el desarrollo comunitario, Julio ofrece
          talleres y terapias grupales que fomentan el soporte mutuo entre
          pacientes y familias. Destacando por su accesibilidad, se esfuerza por
          brindar servicios terapéuticos que facilitan una vida saludable y
          libre de adicciones para todos.
        </p>
        {/* <button className="about-button">Más sobre mí</button> */}
      </div>
    </div>
  );
};

export default AboutUs;
