import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
export default function WhoWeAre() {
  useEffect(() => {
    AOS.init({
      offset: 5,
      delay: 0,
      duration: 800,
      // easing: "ease-in-out",
      // once: false,
    });
  }, []);
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
          <p className="SmallHead" data-aos="fade-right" data-aos-delay="200">
            who we are
          </p>
          <h2 className="HeadFont" data-aos="fade-right" data-aos-delay="300">
            Welcome to SUSIExperts Immigration Consultants
          </h2>
          <p data-aos="fade-right" data-aos-delay="400">
            A dedicated and passionate team of professionals who specialize in
            US immigration matters. We understand that navigating the
            immigration process can be overwhelming, which is precisely why we
            are available to provide assistance.
          </p>
          <button
            className="SisuButton1"
            data-aos="fade-right"
            data-aos-delay="500"
          >
            <a href="/about-us">About Us</a>
          </button>
        </div>
        <div className="AboutImage" data-aos="fade-left" data-aos-delay="400">
          <img src="/Images/who-we-are-image.jpg" alt="" />
          {/* <img src="/Images/About-us-image.png" alt="" /> */}
        </div>
      </div>
      <div
        className="about-image-mobile"
        data-aos="fade-left"
        data-aos-delay="400"
      >
        <img src="/Images/who-we-are-image.jpg" alt="" />
        {/* <img src="/Images/About-us-image.png" alt="" /> */}
      </div>
    </div>
  );
}
