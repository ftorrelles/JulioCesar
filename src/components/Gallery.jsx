import React from "react";
import { Tabs, Tab } from "react-bootstrap";
import "../styles/gallery.css";

const GalleryTabs = () => {
  const categories = {
    Chinauta: [
      { id: 1, src: "chinauta1.png", alt: "chinauta 1" },
      { id: 2, src: "chinauta2.png", alt: "chinauta 2" },
      { id: 3, src: "chinauta3.png", alt: "chinauta 3" },
      { id: 4, src: "chinauta4.png", alt: "chinauta 4" },
      { id: 5, src: "chinauta5.png", alt: "chinauta 5" },
      { id: 6, src: "chinauta6.png", alt: "chinauta 6" },
      { id: 7, src: "chinauta7.png", alt: "chinauta 7" },
      { id: 8, src: "chinauta8.png", alt: "chinauta 8" },
      { id: 9, src: "chinauta9.png", alt: "chinauta 9" },
    ],
    Silvania: [
      { id: 1, src: "Silvania1.png", alt: "Silvania 1" },
      { id: 2, src: "Silvania2.png", alt: "Silvania 2" },
      { id: 3, src: "Silvania3.png", alt: "Silvania 3" },
      { id: 4, src: "Silvania4.png", alt: "Silvania 4" },
      { id: 5, src: "Silvania5.png", alt: "Silvania 5" },
      { id: 6, src: "Silvania6.png", alt: "Silvania 6" },
      { id: 7, src: "Silvania7.png", alt: "Silvania 7" },
      { id: 8, src: "Silvania8.png", alt: "Silvania 8" },
      { id: 9, src: "Silvania9.png", alt: "Silvania 9" },
    ],
    Bogota: [
      { id: 1, src: "Bogota1.png", alt: "Bogota 1" },
      { id: 2, src: "Bogota2.png", alt: "Bogota 2" },
      { id: 3, src: "Bogota3.png", alt: "Bogota 3" },
      { id: 4, src: "Bogota4.png", alt: "Bogota 4" },
      { id: 5, src: "Bogota5.png", alt: "Bogota 5" },
      { id: 6, src: "Bogota6.png", alt: "Bogota 6" },
      { id: 7, src: "Bogota7.png", alt: "Bogota 7" },
      { id: 8, src: "Bogota8.png", alt: "Bogota 8" },
      { id: 9, src: "Bogota9.png", alt: "Bogota 9" },
    ],
    // Más categorías...
  };

  return (
    <div className="gallery-container">
      <h2>Explora Nuestras Instalaciones</h2>
      <Tabs defaultActiveKey="Chinauta" id="gallery-tabs" className="mb-3">
        {Object.keys(categories).map((category) => (
          <Tab
            eventKey={category}
            title={category.replace(/([A-Z])/g, " $1").trim()}
            key={category}
          >
            <div className="image-grid">
              {categories[category].map((image) => (
                <div key={image.id} className="image-item">
                  <img src={image.src} alt={image.alt} />
                </div>
              ))}
            </div>
          </Tab>
        ))}
      </Tabs>
    </div>
  );
};

export default GalleryTabs;
