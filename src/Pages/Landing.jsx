import AskQuestion2 from "../Components/AskQuestion2";
import LandingHeroSec from "../Components/LandingHeroSec";
import WhoWeAre from "../Components/WhoWeAre";
import "./Styles/style.css";
import Testimonials from "../Components/Testimonials";
import ContactUs from "../Components/ContactUs";

export default function Landing() {
  
  return (
    <div className="LandingPage">
      <LandingHeroSec />
      <WhoWeAre />

      <div className="LandingServices OurServices" id="our-services">
        <div className="Container">
          <p className="SmallHead">Our Services</p>
          <h2 className="HeadFont">
            Expert immigration guidance and innovative IT solutions tailored to
            your needs.
          </h2>
          <div className="ServicesContainer">
            <div className="EachService">
              <div className="ServiceImage">
                <img src="/Images/Immigiratioin.svg" alt="" />
              </div>
              <p className="ServiceName">US Immigration</p>
              <p className="ServiceDetials">
                We assist professionals, entrepreneurs, and investors in
                securing U.S. and Canadian visas, ensuring a smooth and
                hassle-free process.
              </p>
              <a href="/usimmigration">Read More</a>
            </div>
            <div className="EachService">
              <div className="ServiceImage">
                <img src="/Images/Development.svg" alt="" />
              </div>
              <p className="ServiceName">IT Solutions</p>
              <p className="ServiceDetials">
                We provide innovative IT services tailored to your business
                needs. From software development to cybersecurity, our solutions
                enhance efficiency, security, and growth.
              </p>
              <a href="">Read More</a>
            </div>
          </div>
        </div>
      </div>

      <AskQuestion2 />

      <div className="Testimonilas" id="testimonials">
        <div className="Container">
          <p className="SmallHead">Trusted by Thousands</p>
          <h2 className="HeadFont">Hear From Our Satisfied Clients</h2>
          <div className="ClientTestimonials">
            <Testimonials />
          </div>
        </div>
      </div>

      <ContactUs />

      
    </div>
  );
}
