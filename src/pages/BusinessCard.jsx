import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import "../styles/businessCard.css";

const BusinessCard = () => {
  return (
    <div className="card-business-container">
      <div className="card-business">
        <div className="card-business-logo">
          <img src="/JC.svg" alt="Logo" className="logo" />
        </div>
        <h4 className="card-business-title">Julio Cesar</h4>
        <h6 className="card-business-title">Teraputa en adicciones</h6>
        <p className="card-business-subtitle">
          Síguenos en nuestras redes sociales y visita nuestro sitio web
        </p>
        <div className="card-business-buttons card-business-icons">
          <a
            href="https://www.facebook.com/profile.php?id=61571299345176"
            target="_blank"
            className="card-business-button"
          >
            <FaFacebook className="icon" /> Síguenos en Facebook
          </a>
          <a
            href="https://www.instagram.com/hablemosdeadicciones714/"
            target="_blank"
            className="card-business-button"
          >
            <FaInstagram className="icon" />
            Síguenos en Instagram
          </a>
          <Link to="/" className="card-business-button">
            <CgWebsite className="icon" />
            Visita nuestro sitio web
          </Link>
          <a
            href="https://wa.me/573103729344"
            target="_blank"
            className="card-business-button"
          >
            <FaWhatsapp className="icon" />
            Contáctanos por WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};

export default BusinessCard;
