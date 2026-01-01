import AskQuestion2 from "../Components/AskQuestion2";
import LandingHeroSec from "../Components/LandingHeroSec";
import WhoWeAre from "../Components/WhoWeAre";
import "./Styles/style.css";
import "./Styles/responsive.css";
import Testimonials from "../Components/Testimonials";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import SuccessStories from "../Components/SuccessStories";
export default function Landing() {
  useEffect(() => {
    AOS.init({
      offset: 5,
      delay: 0,
      duration: 800,
      // easing: "ease-in-out",
      // once: false,
    });
  }, []);
  return (
    <div className="LandingPage">
      <LandingHeroSec />
      <WhoWeAre />

      {/* OUR SERVICES SECTION  */}

      <div className="LandingServices OurServices" id="our-services">
        <div className="Container">
          <p className="SmallHead" data-aos="fade-up" data-aos-delay="200">
            Our Services
          </p>
          <h2 className="HeadFont" data-aos="fade-up" data-aos-delay="300">
            Focused on U.S. immigration excellence with global visa support
          </h2>

          <div
            className="ServicesContainer"
            data-aos="fade-right"
            data-aos-delay="400"
          >
            <div className="EachService">
              <div className="ServiceImage">
                <img src="/Images/Immigiratioin.svg" alt="" />
              </div>
              <p className="ServiceName">US Immigration</p>
              <p className="ServiceDetials">
                We assist professionals, entrepreneurs, and investors in
                obtaining U.S. visas, ensuring a seamless and efficient
                immigration process
              </p>
              <a href="/usimmigration">Read More</a>
            </div>
          </div>
        </div>
      </div>

      <AskQuestion2 />

      {/* TESTIMONIALS SECTION  */}

      <div className="Testimonilas" id="testimonials">
        <div className="Container">
          <p className="SmallHead">Trusted by Thousands</p>
          <h2 className="HeadFont">Hear From Our Satisfied Clients</h2>
          <div className="ClientTestimonials">
            <Testimonials />
          </div>
        </div>
      </div>

      {/* SUCCESS STORIES SECTION  */}
      <div className="success-stories" id="testimonials">
        <div className="Container">
          <p className="SmallHead">Success Stories</p>
          <h2 className="HeadFont">
            At SusiExperts, our success is defined by the achievements of our
            clients. From securing complex visa approvals to helping
            professionals and entrepreneurs build their futures in the U.S.,
            each success story reflects our dedication and expertise in
            immigration excellence.
          </h2>
          <div className="ClientTestimonials">
            <SuccessStories />
          </div>
        </div>
      </div>
    </div>
  );
}
