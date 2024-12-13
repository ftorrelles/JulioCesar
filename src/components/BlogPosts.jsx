import React from "react";
import Slider from "react-slick";
import "../styles/blogPosts.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container } from "react-bootstrap";

const info = [
  {
    id: 1,
    title: "Entendiendo la Adicción: Causas y Efectos",
    imageUrl: "/b1.jpg",
    link: "/link-to-article-1",
  },
  {
    id: 2,
    title: "Estrategias Efectivas para la Recuperación",
    imageUrl: "/b2.jpg",
    link: "/link-to-article-2",
  },
  {
    id: 3,
    title: "El Impacto de la Salud Mental en la Recuperación de Adicciones",
    imageUrl: "/b3.jpg",
    link: "/link-to-article-3",
  },
  {
    id: 4,
    title: "La Ciencia Detrás de la Adicción: Comprendiendo el Cerebro Adicto",
    imageUrl: "/b4.jpg",
    link: "/link-to-article-4",
  },
];

const BlogPosts = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="carousel-container">
      <h2>Blog informativo</h2>
      <h6>
        Informarnos es el primer paso hacia una vida consciente y
        libre de adicciones.
      </h6>

      <Slider {...settings}>
        {info.map((item) => (
          <div key={item.id} className="carousel-slide">
            <img
              src={item.imageUrl}
              alt={item.title}
              className="carousel-image"
            />
            <div className="carousel-overlay">
              <p>{item.title}</p>
              <a href={item.link} className="read-more-button">
                Leer más
              </a>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BlogPosts;
