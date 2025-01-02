import React from "react";
import { Button } from "react-bootstrap";
import {
  FaUsers,
  FaClock,
  FaBook,
  FaPaintBrush,
  FaFutbol,
  FaHome,
  FaPray,
  FaStethoscope,
  FaPlay,
  FaAppleAlt,
  FaTools,
} from "react-icons/fa";
import "../styles/services.css";

const Services = () => {
  const services = [
    {
      id: 1,
      icon: FaHome,
      title: "Tratamiento Interno",
      description: "Programa a puerta cerrada.",
      whatsappMessage:
        "Hola, estoy interesado en más información sobre el Tratamiento Interno.",
    },
    {
      id: 2,
      icon: FaBook,
      title: "Cursos con el SENA",
      description: "Cursos de formación y capacitación.",
      whatsappMessage: "Hola, quisiera saber más sobre los cursos con el SENA.",
    },
    {
      id: 3,
      icon: FaUsers,
      title: "Validación del Bachillerato",
      description: "Programas para completar estudios secundarios.",
      whatsappMessage:
        "Hola, deseo conocer más acerca de la validación del bachillerato.",
    },
    {
      id: 4,
      icon: FaTools,
      title: "Facilitadores Terapéuticos",
      description: "Cursos de adicciones para facilitadores terapéuticos.",
      whatsappMessage:
        "Hola, me interesa información sobre los cursos para Facilitadores Terapéuticos.",
    },
    {
      id: 5,
      icon: FaUsers,
      title: "Taller para Padres",
      description: "Formación para padres de familia sobre adicciones.",
      whatsappMessage:
        "Hola, quisiera más detalles sobre los talleres para padres.",
    },
    {
      id: 6,
      icon: FaStethoscope,
      title: "Tratamiento Ambulatorio",
      description: "Atención y seguimiento sin hospitalización.",
      whatsappMessage:
        "Hola, me gustaría información sobre el tratamiento ambulatorio.",
    },
    {
      id: 7,
      icon: FaHome,
      title: "Tratamiento en Línea",
      description: "Tratamiento personalizado desde su hogar.",
      whatsappMessage: "Hola, estoy interesado en el tratamiento en línea.",
    },
    {
      id: 8,
      icon: FaPray,
      title: "Teoterapia",
      description: "Terapia basada en principios espirituales.",
      whatsappMessage: "Hola, me interesa saber más sobre la Teoterapia.",
    },
    {
      id: 9,
      icon: FaPaintBrush,
      title: "Arteterapia",
      description: "Terapia a través de actividades artísticas.",
      whatsappMessage: "Hola, quiero más información sobre Arteterapia.",
    },
    {
      id: 10,
      icon: FaStethoscope,
      title: "Psicología",
      description: "Atención psicológica especializada.",
      whatsappMessage:
        "Hola, necesito información sobre los servicios de Psicología.",
    },
    {
      id: 11,
      icon: FaFutbol,
      title: "Recreación y Deporte",
      description: "Actividades deportivas y recreativas.",
      whatsappMessage:
        "Hola, ¿podrías darme más detalles sobre las actividades de Recreación y Deporte?",
    },
    {
      id: 12,
      icon: FaPlay,
      title: "Lúdicas",
      description: "Actividades lúdicas para el desarrollo personal.",
      whatsappMessage:
        "Hola, estoy interesado en las actividades lúdicas que ofrecen.",
    },
    {
      id: 13,
      icon: FaTools,
      title: "Talleres Psicopedagógicos",
      description: "Orientación sobre adicciones.",
      whatsappMessage:
        "Hola, me gustaría aprender más sobre los talleres psicopedagógicos disponibles.",
    },
    {
      id: 14,
      icon: FaAppleAlt,
      title: "Alimentación",
      description: "Servicios nutricionales adecuados.",
      whatsappMessage:
        "Hola, necesito información sobre los servicios de alimentación que ofrecen.",
    },
    {
      id: 15,
      icon: FaClock,
      title: "Servicio 24/7",
      description: "Disponibilidad completa todo el año.",
      whatsappMessage: "Hola, me interesa saber más sobre el servicio 24/7.",
    },
  ];

  const sendToWhatsApp = (message) => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/+573103729344?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="services-container">
      <h2 className="services-header">Servicios Ofrecidos</h2>
      <div className="services-grid">
        {services.map((service) => (
          <div key={service.id} className="service-card">
            <service.icon className="service-icon" />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <Button
              variant="outline-success"
              onClick={() => sendToWhatsApp(service.whatsappMessage)}
            >
              Contactar por WhatsApp
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
