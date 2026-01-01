import { useEffect, useState } from "react";
import { HashLink } from "react-router-hash-link";
import AOS from "aos";
import "aos/dist/aos.css";
export default function LandingHeroSec() {
  useEffect(() => {
    AOS.init({
      offset: 5,
      delay: 0,
      duration: 800,
      // easing: "ease-in-out",
      // once: false,
    });
  }, []);
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
          <h1 data-aos="fade-right" data-aos-delay="300">
            Welcome to SUSIExperts <br></br> Immigration Consultants
          </h1>
          <p data-aos="fade-left" data-aos-delay="400">
            Welcome to SUSIExperts Immigration Consultants, a dedicated and
            passionate team of professionals who specialize in US immigration
            matters.
          </p>

          <HashLink data-aos="fade-up" data-aos-delay="600"
            smooth
            to="https://susiexperts.us/case_evaluation.php"
            target="_blank"
          >
            Evaluate Profile
          </HashLink>
        </div>
      </div>
    </div>
  );
}
