import { HashLink } from "react-router-hash-link";
import { MdOutlineEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";
import { RiInstagramFill } from "react-icons/ri";

export default function Navbar() {
  return (
    <>
      <div className="ContactInfo">
        <div className="Container">
          <div className="email-info">
            <MdOutlineEmail color="white" size={25} />
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=contact@susiexperts.us"
              target="_blank"
              rel="noreferrer"
            >
              contact@susiexperts.us
            </a>
          </div>
          <div className="phone-info">
            <FaLocationDot color="white" size={25} />
            <a
              href="https://www.google.com/maps/dir/33.5314944,73.1840512/SUSIExperts,+Markaz,+VISTA+I+8+Markaz+I-8,+Islamabad/@33.595847,73.0444782,12z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x38df959fbe482967:0x7d3fed86edc95636!2m2!1d73.0752068!2d33.6676974?entry=ttu&g_ep=EgoyMDI1MDkyOC4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noreferrer"
            >
              Office #601, VISTA, I-8 Markaz, Islamabad, Pakistan
            </a>
          </div>
          <div className="social-info">
            <a
              href="https://wa.me/+19037424008"
              target="_blank"
              rel="noreferrer"
            >
              <FaWhatsapp color="white" size={25} />
            </a>
            <a
              href="https://www.facebook.com/susiexperts"
              target="_blank"
              rel="noreferrer"
            >
              <IoLogoYoutube color="white" size={25} />
            </a>
            <a
              href="https://www.facebook.com/susiexperts"
              target="_blank"
              rel="noreferrer"
            >
              <RiInstagramFill color="white" size={25} />
            </a>
            <a
              href="https://www.facebook.com/susiexperts"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebookF color="white" size={25} />
            </a>
          </div>
        </div>
      </div>
      <div className="Navbar">
        <div className="NavbarInner">
          <div className="NavbarLogo">
            <a href="/">
              <img src="/Images/susi-experts-logo.webp" alt="" />
            </a>
          </div>
          <div className="NavbarLinks">
            <HashLink smooth to="/#">
              home
            </HashLink>
            <HashLink smooth to="/#about-us">
              about us
            </HashLink>
            <HashLink smooth to="/#our-services">
              our services
            </HashLink>
            <HashLink smooth to="/#faqs">
              faq's
            </HashLink>
            <HashLink smooth to="/#contact-us">
              contact us
            </HashLink>
          </div>
        </div>
      </div>
    </>
  );
}
