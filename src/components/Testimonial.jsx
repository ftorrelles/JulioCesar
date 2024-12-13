// import React from "react";
// import "../styles/testimonials.css";

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick"; // Importa el componente Slider

// const testimonialsData = [
//   {
//     id: 1,
//     image: "/about.jpeg",
//     name: "Ana Martínez",
//     text: "Gracias a Julio, he encontrado un nuevo camino en mi vida. Su apoyo ha sido fundamental.",
//   },
//   {
//     id: 2,
//     image: "/about.jpeg",
//     name: "Carlos Hernández",
//     text: "La terapia grupal me ayudó a entender que no estoy solo y que la recuperación es posible.",
//   },
//   // Más testimonios...
// ];

// const Testimonials = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 8000,
//     cssEase: "linear",
//   };

//   return (
//     <div className="testimonials-container">
//       <h2>Testimonios</h2>
//       <Slider {...settings}>
//         {testimonialsData.map((testimonial) => (
//           <div key={testimonial.id} className="testimonial">
//             <img
//               src={testimonial.image}
//               alt={testimonial.name}
//               className="testimonial-image"
//             />
//             <div className="testimonial-info">
//               <h3>{testimonial.name}</h3>
//               <p>{testimonial.text}</p>
//             </div>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default Testimonials;

import React from "react";
import { Card, Container } from "react-bootstrap";
import Slider from "react-slick";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/testimonials.css";

const testimonialsData = [
  {
    id: 1,
    videoUrl: "/testimonio1.mp4",
    name: "William Chaparro",
    text: "Me han ayudado a conocerme a mi mismo a tener amor propio",
  },
  {
    id: 2,
    videoUrl: "/testimonio2.mp4",
    name: "Willian Lazo",
    text: "Me han ayudado a conocer mas de Dios, y me han brindado ayudas con profesionales",
  },
  {
    id: 1,
    videoUrl: "/testimonio1.mp4",
    name: "Ana Martínez",
    text: "Gracias a Julio, he encontrado un nuevo camino en mi vida. Su apoyo ha sido fundamental.",
  },
  {
    id: 1,
    videoUrl: "/testimonio1.mp4",
    name: "Ana Martínez",
    text: "Gracias a Julio, he encontrado un nuevo camino en mi vida. Su apoyo ha sido fundamental.",
  },
  // Más testimonios...
];

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          arrows: false, // Considera desactivar las flechas en pantallas muy pequeñas
          centerMode: true, // Esto ayuda a centrar los slides si se ve mejor así
        },
      },
    ],
  };

  return (
    <Container className="mt-5 mb-5 ">
      <h2 className="section-testimonial-title">Testimonios</h2>
      <Slider {...settings}>
        {testimonialsData.map((testimonial, index) => (
          <div key={index}>
            <Card className="mx-1 my-2">
              <video controls className="w-100">
                <source src={testimonial.videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <Card.Body>
                <Card.Title>{testimonial.name}</Card.Title>
                <Card.Text>{testimonial.text}</Card.Text>
              </Card.Body>
            </Card>
          </div>
        ))}
      </Slider>
    </Container>
  );
};
export default Testimonials;
