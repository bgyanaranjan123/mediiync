import React, { useEffect, useRef } from "react";
import "./Header.css";

const eventImages = Array.from(
  { length: 24 },
  (_, index) =>
    `/src/assets/floating Images/images${index + 1}.jpg`
);

function Header() {
  const animationRef = useRef(null);

  useEffect(() => {
    const animationArea = animationRef.current;

    if (!animationArea) return;

    const imageElements = Array.from(
      animationArea.querySelectorAll(".orbit-image")
    );

    let animationFrame;

    const startTime = performance.now();

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;

      /*
        Speed:
        Lower value = faster
        Higher value = slower
      */

      const speed = 0.00028;

      const baseTime = elapsed * speed;

      const width = animationArea.clientWidth;
      const height = animationArea.clientHeight;

      /*
        LARGE INFINITY SIZE

        These values use almost the entire section.
      */

      const horizontalRadius = width * 0.44;
      const verticalRadius = height * 0.40;

      imageElements.forEach((image, index) => {
        /*
          Equal spacing around the infinity curve.

          Every image has a different phase.
          This prevents all images from grouping together.
        */

        const phase =
          (index / imageElements.length) * Math.PI * 2;

        const t = baseTime + phase;

        /*
          Mathematical figure-eight curve.

          X = sin(t)
          Y = sin(2t)

          This creates a true ∞ shape.
        */

        const x = Math.sin(t) * horizontalRadius;

        const y =
          Math.sin(t * 2) *
          verticalRadius;

        /*
          Small natural depth variation.

          This makes the movement feel more organic
          without destroying the infinity shape.
        */

        const depth =
          Math.sin(t * 3 + index) * 0.5 + 0.5;

        /*
  Different image sizes.

  Every image gets a unique size
  while still smoothly changing
  during the infinity movement.
*/

const sizePattern = [
  0.62,
  0.78,
  0.95,
  1.15,
  0.72,
  1.28,
  0.88,
  0.68,
  1.08,
  0.82,
  1.22,
  0.74,
  0.98,
  0.64,
  1.16,
  0.86,
  0.70,
  1.30,
  0.92,
  0.76,
  1.12,
  0.66,
  1.00,
  0.84
];

const baseScale =
  sizePattern[index % sizePattern.length];


/*
  Very subtle breathing movement.

  This keeps the original image size
  but adds natural variation.
*/

const breathing =
  1 +
  Math.sin(t * 2.5 + index) * 0.05;


const scale =
  baseScale * breathing;

        const rotation =
          Math.sin(t * 2) * 18;

        /*
          Opacity changes slightly according to position.

          Images near the center are slightly softer,
          helping protect the text.
        */

        const centerDistance =
          Math.abs(x) / horizontalRadius;

        const opacity =
          centerDistance < 0.18
            ? 0.58
            : 0.82;

        image.style.transform = `
          translate3d(
            ${x}px,
            ${y}px,
            0
          )
          translate(-50%, -50%)
          rotate(${rotation}deg)
          scale(${scale})
        `;

        image.style.opacity = opacity;
      });

      animationFrame =
        requestAnimationFrame(animate);
    };

    animationFrame =
      requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <section className="hero">

      {/* Background atmosphere */}

      <div className="hero-noise"></div>

      <div className="ambient-glow glow-one"></div>

      <div className="ambient-glow glow-two"></div>


      {/* Floating infinity system */}

      <div
        className="event-animation"
        ref={animationRef}
      >

        {eventImages.map((image, index) => (
          <div
            className="orbit-image"
            key={index}
          >

            {/* Smoke particles */}

            <span className="smoke smoke-one"></span>

            <span className="smoke smoke-two"></span>

            <span className="smoke smoke-three"></span>


            {/* Image */}

            <div className="image-wrapper">

              <img
                src={image}
                alt={`Event experience ${index + 1}`}
              />

            </div>

          </div>
        ))}

      </div>


      {/* Center content */}

      <div className="hero-content">

        <div className="eyebrow">

          <span></span>

          CREATE • CELEBRATE • REMEMBER

          <span></span>

        </div>


        <div className="title-aura"></div>


        <h1>

          AURELIA

          <strong>EVENTS</strong>

        </h1>


        <p>

          Extraordinary moments.

          <br />

          Beautifully brought to life.

        </p>


        <button className="book-button">

          <span>
            Begin Your Experience
          </span>

          <b>↗</b>

        </button>

      </div>


      {/* Bottom indicator */}

      <div className="scroll-indicator">

        <span></span>

        EXPLORE THE EXPERIENCE

      </div>

    </section>
  );
}

export default Header;