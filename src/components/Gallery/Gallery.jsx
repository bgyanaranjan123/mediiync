import React from "react";
import { Link } from "react-router-dom";
import "./Gallery.css";

import image1 from "../../assets/floating Images/images1.jpg";
import image2 from "../../assets/floating Images/images2.jpg";
import image3 from "../../assets/floating Images/images3.jpg";
import image4 from "../../assets/floating Images/images4.jpg";
import image5 from "../../assets/floating Images/images5.jpg";
import image6 from "../../assets/floating Images/images6.jpg";
import image7 from "../../assets/floating Images/images7.jpg";
import image8 from "../../assets/floating Images/images8.jpg";

const galleryItems = [
  { id: 1, title: "Golden Glow Reception", category: "Birthday Parties", description: "A dazzling celebration filled with warm lights, floral elegance, and a festive atmosphere.", src: image1 },
  { id: 2, title: "Royal Garden Setup", category: "Private Events", description: "An intimate outdoor setting designed with luxury, charm, and timeless decor.", src: image2 },
  { id: 3, title: "Champagne Night", category: "Concerts", description: "A stylish and vibrant stage design perfect for premium event hosting.", src: image3 },
  { id: 4, title: "Dreamy Wedding Entry", category: "College Events", description: "A graceful entrance with classic florals and elegant lighting.", src: image4 },
  { id: 5, title: "Modern Celebration", category: "Private Events", description: "A polished setup that blends soft lighting and contemporary decor.", src: image5 },
  { id: 6, title: "Sparkling Dance Floor", category: "Concerts", description: "A dramatic centerpiece made for energy, motion, and unforgettable nights.", src: image6 },
  { id: 7, title: "Luxury Lounge", category: "Birthday Parties", description: "A refined lounge styled for comfort, glamour, and memorable social moments.", src: image7 },
  { id: 8, title: "Elegant Decor Wall", category: "College Events", description: "A graceful backdrop designed to elevate every photo and celebration moment.", src: image8 },
];

function Gallery() {
  return (
    <section className="gallery-page">
      <div className="gallery-hero">
        <p className="gallery-eyebrow">Aurelia Gallery</p>
        <h1>
          Explore the <span>beauty</span> of our events
        </h1>
        <p>
          Discover elegant decor, colorful celebrations, and immersive event experiences curated with passion.
        </p>
      </div>

      <div className="gallery-grid">
        {galleryItems.map((item) => (
          <Link to={`/gallery/${item.id}`} className="gallery-card" key={item.id}>
            <img src={item.src} alt={item.title} />
            <div className="gallery-card-content">
              <span>{item.category}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </Link>
        ))}
      </div>

      <div className="gallery-footer-action">
        <Link className="gallery-back-link" to="/">
          ← Back to Home
        </Link>
      </div>
    </section>
  );
}

export default Gallery;