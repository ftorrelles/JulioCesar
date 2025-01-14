import React from "react";
import "../styles/contactSection.css";
import { Card, Row, Col, Container } from "react-bootstrap";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

const ContactSection = () => {
  return (
    <Container className="content-contact my-5">
      <h2 className="text-center  mb-4">Mis Contactos</h2>
      <Row xs={1} md={2} className="g-4 justify-content-center">
        <Col>
          <Card className=" bg-dark ">
            <Card.Body className="content-card ">
              <FaPhone className="contact-icon" />
              <div className="info-card">
                <Card.Title>Teléfono</Card.Title>
                <Card.Text>+57 310 3729344</Card.Text>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className=" bg-dark ">
            <Card.Body className="content-card">
              <FaEnvelope className="contact-icon" />
              <div className="info-card">
                <Card.Title>Email</Card.Title>
                <Card.Text>juliocesarcaceres94@gmail.com</Card.Text>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className=" bg-dark ">
            <Card.Body className="content-card ">
              <FaMapMarkerAlt className="contact-icon" />
              <div className="info-card">
                <Card.Title>Dirección</Card.Title>
                <Card.Text>📌 Km 65 Santropel Acropolis</Card.Text>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className=" bg-dark ">
            <Card.Body className="content-card ">
              <div className="social-icons">
                <a
                  href="https://www.facebook.com/profile.php?id=61571299345176"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebookF className="mx-2 contact-icon" />
                </a>
                <a
                  href="https://www.instagram.com/juliocesar.terap/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram className="mx-2 contact-icon" />
                </a>
                <a
                  href="https://wa.me/+573103729344"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWhatsapp className="mx-2 contact-icon" />
                </a>
              </div>{" "}
              <div className="info-card">
                <Card.Title>Redes Sociales</Card.Title>
                <Card.Text>Conéctate con nosotros</Card.Text>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactSection;
