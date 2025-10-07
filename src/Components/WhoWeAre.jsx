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
            Welcome to SUSIExperts Immigration Consultants
          </h2>
          <p>A dedicated and
            passionate team of professionals who specialize in US immigration
            matters.
            We understand that navigating the immigration process can be
            overwhelming, which is precisely why we are available to provide
            assistance.
          </p>
          <button className="SisuButton1">
          <a href="/about-us">About Us</a>
          </button>
        </div>
        <div className="AboutImage">
          <img src="/Images/who-we-are-image.jpg" alt="" />
        </div>
      </div>
    </div>
  );
}
