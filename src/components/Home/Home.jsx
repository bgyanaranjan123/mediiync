import React, { useEffect, useRef } from "react";
import "../Header/Header.css";

const eventImages = Array.from(
  { length: 24 },
  (_, index) => `/src/assets/floating Images/images${index + 1}.jpg`
);


  useEffect(() => {
    const container = animationRef.current;
    if (!container) return;

    const items = Array.from(
      container.querySelectorAll(".orbit-image")
    );

    const width = () => container.clientWidth;
    const height = () => container.clientHeight;

    const centerX = () => width() / 2;
    const centerY = () => height() / 2;

    const safeRadius = () =>
      Math.min(width(), height()) * 0.23;

    const particles = items.map((item, index) => {

      const sizePattern = [
        0.62,0.78,0.95,1.15,0.72,1.28,
        0.88,0.68,1.08,0.82,1.22,0.74,
        0.98,0.64,1.16,0.86,0.70,1.30,
        0.92,0.76,1.12,0.66,1.00,0.84
      ];

      const scale = sizePattern[index];

      return {

        element: item,

        radius: 42 * scale,

        scale,

        x:
          Math.random() * (width() - 200) + 100,

        y:
          Math.random() * (height() - 200) + 100,

        vx:
          (Math.random() - 0.5) * 2.8,

        vy:
          (Math.random() - 0.5) * 2.8,

        rotation:
          Math.random() * 360,

        rotationSpeed:
          (Math.random() - 0.5) * 0.45,

        breathe:
          Math.random() * Math.PI * 2

      };

    });

    let frame;

    const animate = () => {

      const w = width();
      const h = height();

      const cx = centerX();
      const cy = centerY();

      const safe = safeRadius();

      particles.forEach((p) => {

        p.x += p.vx;
        p.y += p.vy;

        if (p.x < p.radius) {

          p.x = p.radius;
          p.vx *= -1;

        }

        if (p.x > w - p.radius) {

          p.x = w - p.radius;
          p.vx *= -1;

        }

        if (p.y < p.radius) {

          p.y = p.radius;
          p.vy *= -1;

        }

        if (p.y > h - p.radius) {

          p.y = h - p.radius;
          p.vy *= -1;

        }

        const dx = p.x - cx;
        const dy = p.y - cy;

        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < safe + p.radius) {

          const angle = Math.atan2(dy, dx);

          p.x =
            cx +
            Math.cos(angle) *
              (safe + p.radius);

          p.y =
            cy +
            Math.sin(angle) *
              (safe + p.radius);

         p.vx += Math.cos(angle) * 0.12;
p.vy += Math.sin(angle) * 0.12;
        }

      });

      for (let i = 0; i < particles.length; i++) {

        for (
          let j = i + 1;
          j < particles.length;
          j++
        ) {

          const a = particles[i];
          const b = particles[j];

          const dx = b.x - a.x;
          const dy = b.y - a.y;

          const distance =
            Math.sqrt(dx * dx + dy * dy);

          const min =
            a.radius + b.radius + 12;

          if (distance < min) {

            const angle =
              Math.atan2(dy, dx);

            const overlap =
              (min - distance) / 2;

            a.x -=
              Math.cos(angle) * overlap;

            a.y -=
              Math.sin(angle) * overlap;

            b.x +=
              Math.cos(angle) * overlap;

            b.y +=
              Math.sin(angle) * overlap;

            const tempX = a.vx;
            const tempY = a.vy;

            a.vx = b.vx;
            a.vy = b.vy;

            b.vx = tempX;
            b.vy = tempY;

          }

        }

      }

      particles.forEach((p) => {

        p.rotation += p.rotationSpeed;

        p.breathe += 0.03;

        const scale =
          p.scale +
          Math.sin(p.breathe) * 0.04;

        p.element.style.transform = `
translate(-50%,-50%)
translate3d(${p.x}px,${p.y}px,0)
rotate(${p.rotation}deg)
scale(${scale})
`;

        p.element.style.opacity = 0.84;

      });

      frame =
        requestAnimationFrame(animate);

    };

    frame =
      requestAnimationFrame(animate);

    return () =>
      cancelAnimationFrame(frame);

  }, []);
    return (
    <section className="hero" id="home">

      {/* Background */}

      <div className="hero-noise"></div>

      <div className="ambient-glow glow-one"></div>

      <div className="ambient-glow glow-two"></div>

      {/* Floating Images */}

      <div
        className="event-animation"
        ref={animationRef}
      >
        {eventImages.map((image, index) => (
          <div
            className="orbit-image"
            key={index}
          >
            <span className="smoke smoke-one"></span>

            <span className="smoke smoke-two"></span>

            <span className="smoke smoke-three"></span>

            <div className="image-wrapper">

              <img
                src={image}
                alt={`Event ${index + 1}`}
                loading="lazy"
                draggable="false"
              />

            </div>

          </div>
        ))}
      </div>

      {/* Center Content */}

      <div className="hero-content">

        <div className="eyebrow">

          <span></span>

          CREATE • CELEBRATE • REMEMBER

          <span></span>

        </div>

        <div className="title-aura"></div>

        <h1>

          AURELIA

          <strong> EVENTS</strong>

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

      {/* Scroll Indicator */}

      <div className="scroll-indicator">

        <span></span>

        EXPLORE THE EXPERIENCE

      </div>

    </section>
  );
}

export default Home;