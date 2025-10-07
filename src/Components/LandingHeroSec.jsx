import { useEffect, useState } from "react";
import { HashLink } from "react-router-hash-link";

export default function LandingHeroSec() {
  const images = [
    "/Images/hero-bg-3.webp",
    "/Images/hero-bg-2.webp",
    "/Images/hero-bg-1.webp",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 9000); // switch every 5s

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="HeroSection">
      <div className="overlay"></div>
      <div className="hero-bg-images">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="About"
            className={`fade-image ${index === currentIndex ? "active" : ""}`}
          />
        ))}
      </div>
      <div className="HeroContent">
        <div className="HeroContentInner Container">
          <h1>
            Welcome to SUSIExperts <br></br> Immigration Consultants
          </h1>
          <p>
            Welcome to SUSIExperts Immigration Consultants, a dedicated and
            passionate team of professionals who specialize in US immigration
            matters.
          </p>

          <HashLink smooth to="/#contact-us">
            Let's Go
          </HashLink>
        </div>
      </div>
    </div>
  );
}
