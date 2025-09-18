import { useEffect, useState } from "react";
export default function WhoWeAre() {
      const images = ["/Images/AboutImage.webp", "/Images/AboutImage2.webp"];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000); // switch every 5s

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="AboutUs" id="about-us">
        <div className="Container">
          <div className="AboutContent">
            <p className="SmallHead">who we are</p>
            <h2 className="HeadFont">
              We are SUSIExperts, providing expert immigration consulting, and
              innovative IT and software solutions.
            </h2>
            <button className="SisuButton1">About Us</button>
          </div>
          <div className="AboutImage">
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt="About"
                className={`fade-image ${
                  index === currentIndex ? "active" : ""
                }`}
              />
            ))}
          </div>
        </div>
      </div>
  )
}
