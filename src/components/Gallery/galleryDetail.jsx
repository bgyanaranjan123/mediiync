import React from "react";
import { useParams, Link } from "react-router-dom";
import "./Gallery.css";

import image1 from "../../assets/floating Images/images1.jpg";
import image2 from "../../assets/floating Images/images2.jpg";
import image3 from "../../assets/floating Images/images3.jpg";
import image4 from "../../assets/floating Images/images4.jpg";
import image5 from "../../assets/floating Images/images5.jpg";
import image6 from "../../assets/floating Images/images6.jpg";
import image7 from "../../assets/floating Images/images7.jpg";
import image8 from "../../assets/floating Images/images8.jpg";

const galleryItems = {
  1: { title: "Golden Glow Reception", category: "Birthday Parties", description: "A dazzling celebration filled with warm lights, floral elegance, and a festive atmosphere.", src: image1 },
  2: { title: "Royal Garden Setup", category: "Private Events", description: "An intimate outdoor setting designed with luxury, charm, and timeless decor.", src: image2 },
  3: { title: "Champagne Night", category: "Concerts", description: "A stylish and vibrant stage design perfect for premium event hosting.", src: image3 },
  4: { title: "Dreamy Wedding Entry", category: "College Events", description: "A graceful entrance with classic florals and elegant lighting.", src: image4 },
  5: { title: "Modern Celebration", category: "Private Events", description: "A polished setup that blends soft lighting and contemporary decor.", src: image5 },
  6: { title: "Sparkling Dance Floor", category: "Concerts", description: "A dramatic centerpiece made for energy, motion, and unforgettable nights.", src: image6 },
  7: { title: "Luxury Lounge", category: "Birthday Parties", description: "A refined lounge styled for comfort, glamour, and memorable social moments.", src: image7 },
  8: { title: "Elegant Decor Wall", category: "College Events", description: "A graceful backdrop designed to elevate every photo and celebration moment.", src: image8 },
};

function GalleryDetails() {
  const { id } = useParams();
  const item = galleryItems[id];

  if (!item) {
    return (
      <div className="gallery-details-empty">
        <h2>Gallery item not found</h2>
        <Link to="/gallery">Back to gallery</Link>
      </div>
    );
  }

  return (
    <section className="gallery-details">
      <div className="gallery-details-card">
        <img src={item.src} alt={item.title} />
        <div className="gallery-details-content">
          <p className="gallery-eyebrow">{item.category}</p>
          <h1>{item.title}</h1>
          <p>{item.description}</p>
          <div className="gallery-highlight-row">
            <span>Premium Styling</span>
            <span>Luxury Decor</span>
            <span>Memorable Moments</span>
          </div>
          <Link className="gallery-back-link" to="/gallery">
            ← Back to Gallery
          </Link>
        </div>
      </div>
    </section>
  );
}

export default GalleryDetails;
