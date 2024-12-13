import React, { useState } from "react";
import { Card, Button, Row, Col, Container } from "react-bootstrap";
import "../styles/blog.css";
import ModalPost from "./ModalPost"; // Asegúrate de que el modal se llama ModalPost

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: "Síndrome de Abstinencia",
      description: "Impactos físicos y emocionales del retiro",
      imageUrl: "/blog1.jpg",
      content: `<p><strong>El síndrome de abstinencia</strong> se manifiesta cuando un individuo cesa o reduce el consumo de drogas o alcohol a las que su cuerpo se ha habituado. <br /><br /><strong>Los síntomas</strong> varían según la sustancia y el nivel de dependencia, incluyendo desde dolores físicos, como náuseas y temblores, hasta efectos emocionales y psicológicos, como ansiedad y depresión.<br /><br /><strong>La intensidad del síndrome de abstinencia</strong> puede ser un obstáculo significativo para la recuperación, ya que el miedo a enfrentar estos síntomas a menudo desalienta a los usuarios a dejar de consumir. <br /><br /><strong>Tratamientos supervisados y terapias de apoyo</strong> son esenciales para manejar y superar esta fase, asegurando que el individuo pueda recuperarse en un entorno seguro y controlado.</p>`,
    },
    {
      id: 2,
      title: "La Marihuana",
      description: "Efectos y riesgos del consumo.",
      imageUrl: "/blog2.jpg",
      content: `<strong>La marihuana, </strong> comúnmente utilizada por sus efectos
            relajantes y eufóricos, sigue siendo objeto de debates intensos
            respecto a sus beneficios y riesgos. <br />
            <br /> <strong>A corto plazo,</strong> mejora el ánimo y relaja el cuerpo, pero no
            está exenta de efectos adversos como problemas de memoria,
            dificultades de concentración y, en algunos casos, paranoia. <br /><br /> <strong>A largo
            plazo,</strong>  el uso frecuente de marihuana puede llevar a la dependencia y
            afectar la salud mental, especialmente en jóvenes. <br /><br />La educación
            sobre sus efectos y el manejo responsable es crucial, especialmente
            en regiones donde su consumo es legal.`,
    },
    {
      id: 3,
      title: "El Bazuco",
      description: "Altamente adictiva. Puerta al infierno",
      imageUrl: "/blog3.jpeg",
      content: `<strong>El bazuco,</strong> una forma impura y barata de la cocaína, es altamente
            adictiva y destructiva. <br /><br /> Esta sustancia está asociada con una rápida
            degradación de la salud física y mental, incluyendo daño pulmonar,
            problemas dentales severos, y alteraciones mentales como la paranoia
            y la agresividad. <br /><br /><strong>El tratamiento</strong>  para la adicción al bazuco es
            complicado debido a su alta toxicidad y los ambientes en los que se
            consume. <br /><br /> <strong>Los programas de rehabilitación</strong>  deben abordar no solo la
            dependencia física sino también las condiciones sociales y
            psicológicas que fomentan su uso.`,
    },
  ];

  const [activeModal, setActiveModal] = useState(null);

  return (
    <>
      <Container className="my-5">
        <h2 className="section-blog-title">Blog informativo</h2>
        <Row xs={1} md={2} lg={3} className="g-4">
          {posts.map((post) => (
            <Col key={post.id}>
              <Card>
                <Card.Img variant="top" src={post.imageUrl} />
                <Card.Body>
                  <Card.Title>{post.title}</Card.Title>
                  <Card.Text>{post.description}</Card.Text>
                  <Button
                    variant="outline-success"
                    onClick={() => setActiveModal(post.id)} // Abre el modal correspondiente
                  >
                    Leer más
                  </Button>
                </Card.Body>
              </Card>
              <ModalPost
                show={activeModal === post.id}
                onHide={() => setActiveModal(null)}
                title={post.title}
                content={post.content}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Blog;
