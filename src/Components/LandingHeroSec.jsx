import { useEffect, useState } from "react";

export default function LandingHeroSec() {
  const [animateHeading, setAnimateHeading] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = ["/Images/HeroBg1.webp", "/Images/HeroBg2.webp"];

  const texts = [
    "Your Trusted Partner <br> for US Immigration",
    "Your Trusted Partner <br> for IT Solutions",
  ];

  const text2 = [
    "Welcome to SUSIExperts Immigration Consultants, a dedicated and passionate team of professionals who specialize in US immigration matters.",
    "Welcome to SUSIExperts — a trusted name in Professional services and global IT solutions. Our IT division delivers software, cloud, and consulting solutions tailored to business needs.",
  ];

  const buttonName = ["Let's Go", "Get Started"];

  useEffect(() => {
    const interval = setInterval(() => {
      // Trigger heading animation
      setAnimateHeading(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev === 0 ? 1 : 0));
        setAnimateHeading(true);
      }, 500); // sync with fade
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="HeroSection">
      {/* Both background layers */}
      {images.map((img, index) => (
        <div
          key={index}
          className={`bg-layer ${currentIndex === index ? "visible" : ""}`}
          style={{ backgroundImage: `url(${img})` }}
        ></div>
      ))}

      <div className="overlay"></div>
      <div className="HeroContent">
        <div className="HeroContentInner Container">
          <h1
            className={animateHeading ? "move" : ""}
            dangerouslySetInnerHTML={{ __html: texts[currentIndex] }}
          />
          <p
            className={animateHeading ? "move2" : ""}
            dangerouslySetInnerHTML={{ __html: text2[currentIndex] }}
          />
          
          <button
            className={animateHeading ? "move2" : ""}
            dangerouslySetInnerHTML={{ __html: buttonName[currentIndex] }}
          />
        </div>
      </div>
    </div>
  );
}
