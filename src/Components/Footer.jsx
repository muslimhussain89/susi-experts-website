import { FaFacebookF } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { PiInstagramLogoFill } from "react-icons/pi";
import { BiLogoLinkedin } from "react-icons/bi";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

export default function Footer() {
  return (
    <>
      <div className="Footer">
      <div className="Container">
        <div className="FooterLogoSec">
          <a href="">
            <img src="../../public/Images/whiteLogo.png" alt="" />
          </a>
          <p>
            Thank you for visiting SUSIExperts, a dedicated team of
            professionals offering expert solutions in Content Writing, Software
            Development, Data Science & Analytics, and different IT services
            tailored to your needs. We look forward to working with you and
            helping you achieve your goals through innovation and expertise.
          </p>
          <a className="Social" href="">
            <FaFacebookF />
          </a>
          <a className="Social" href="">
            <IoLogoYoutube />
          </a>
          <a className="Social" href="">
            <PiInstagramLogoFill />
          </a>
          <a className="Social" href="">
            <BiLogoLinkedin />
          </a>
        </div>
        <div className="FooterLinksSec">
          <p>Quick Links</p>
          <div className="FooterLinksWrapper">
            <a href="">home</a>
            <a href="">about us</a>
            <a href="">our services</a>
            <a href="">faq's</a>
            <a href="">contact us</a>
          </div>
        </div>
        <div className="FooterContactSec">
          <p>Get in Touch</p>
          <div className="FooterContactSecWrapper">
            <a href="">
              {" "}
              <FaPhoneAlt />
              +1 903 742 4008
            </a>
            <a href="">
              <MdEmail />
              contact@susiexperts.us
            </a>
            <a href="">
              <FaLocationDot />
              Office #601, VISTA, I-8 Markaz, Islamabad, Pakistan
            </a>
          </div>
          <a href="">
            <FaLocationDot />
            Office #601, VISTA, I-8 Markaz, Islamabad, Pakistan
          </a>
        </div>
      </div>
    </div>
    <div className="Rights">
      <p>Copyright © 2025 SUSIE, All Rights Reserved</p>
    </div>
    </>
    
  );
}
