import "../styles/home.css";
import "animate.css/animate.min.css";

const ContentHome = () => {
  const whatsappURL =
    "https://wa.me/+573103729344?text=Hola!%20Estoy%20interesado%20en%20agendar%20una%20cita.";

  return (
    <div className="home-container">
      <div className="overlay"></div>
      <div className="content">
        <img src="2.svg" alt="" />
        <p>Especialista en terapia de adicciones</p>
        <a
          href={whatsappURL}
          target="_blank"
          rel="noopener noreferrer"
          className="cta-button"
        >
          Agendar una cita
        </a>
      </div>
    </div>
  );
};

export default ContentHome;
