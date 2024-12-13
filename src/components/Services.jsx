import React from "react";
import "../styles/services.css";
import {
  FaUserMd,
  FaUsers,
  FaClock,
  FaHeartbeat,
  FaBook,
  FaPaintBrush,
  FaFutbol,
  FaHome,
  FaPray,
  FaStethoscope,
  FaPlay,
  FaAppleAlt,
  FaTools,
} from "react-icons/fa"; // Iconos adicionales

const Services = () => {
  const services = [
    {
      icon: FaHome,
      title: "Tratamiento Interno",
      description: "Programa a puerta cerrada.",
    },
    {
      icon: FaBook,
      title: "Cursos con el SENA",
      description: "Cursos de formación y capacitación.",
    },
    {
      icon: FaUsers,
      title: "Validación del Bachillerato",
      description: "Programas para completar estudios secundarios.",
    },
    {
      icon: FaTools,
      title: "Facilitadores Terapéuticos",
      description: "Cursos de adicciones para facilitadores terapéuticos.",
    },
    {
      icon: FaUsers,
      title: "Taller para Padres",
      description: "Formación para padres de familia sobre adicciones.",
    },
    {
      icon: FaStethoscope,
      title: "Tratamiento Ambulatorio",
      description: "Atención y seguimiento sin hospitalización.",
    },
    {
      icon: FaHome,
      title: "Tratamiento en Línea",
      description: "Tratamiento personalizado desde su hogar.",
    },
    {
      icon: FaPray,
      title: "Teoterapia",
      description: "Terapia basada en principios espirituales.",
    },
    {
      icon: FaPaintBrush,
      title: "Arteterapia",
      description: "Terapia a través de actividades artísticas.",
    },
    {
      icon: FaStethoscope,
      title: "Psicología",
      description: "Atención psicológica especializada.",
    },
    {
      icon: FaFutbol,
      title: "Recreación y Deporte",
      description: "Actividades deportivas y recreativas.",
    },
    {
      icon: FaPlay,
      title: "Lúdicas",
      description: "Actividades lúdicas para el desarrollo personal.",
    },
    {
      icon: FaTools,
      title: "Talleres Psicopedagógicos",
      description: "Orientación sobre adicciones.",
    },
    {
      icon: FaAppleAlt,
      title: "Alimentación",
      description: "Servicios nutricionales adecuados.",
    },
    {
      icon: FaClock,
      title: "Servicio 24/7",
      description: "Disponibilidad completa todo el año.",
    },
  ];

  return (
    <div className="services-container">
      <h2 className="services-header">Servicios Ofrecidos</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <service.icon className="service-icon" />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
