import { HashLink } from "react-router-hash-link";
import { MdOutlineEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";
import { RiInstagramFill } from "react-icons/ri";
import { useEffect, useState } from "react";

import { RiMenu3Fill } from "react-icons/ri";
import { IoClose } from "react-icons/io5";

import { useLocation } from "react-router-dom";
export default function Navbar() {
  const location = useLocation();
  const path = location.pathname;
  const addColor =
    path.includes("/eb2-niv") ||
    path.includes("/usimmigration") ||
    path.includes("/niw-entrepreneurs") ||
    path.includes("/eb1-a") ||
    path.includes("/eb1-b");
  path.includes("/perm-labor-certification");
  path.includes("/I-485-green-card-application");
  path.includes("/immigrant-visa-processing");

  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // Prevent vertical scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; // Lock scroll
    } else {
      document.body.style.overflow = "auto"; // Restore scroll
    }

    // Cleanup when component unmounts (important)
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <>
      <div class="marquee">
        <span class="marquee-track">
          <span class="marquee-text">
            Congratulations to Dr. Shahid Zaman on the successful approval of
            EB1A U.S. Green Card under Premium Processing – A proud success by
            SUSIExperts Immigration Consultants
          </span>
        </span>
      </div>

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
            <a
              href="https://www.google.com/maps/place/30+N+Gould+St+%234000,+Sheridan,+WY+82801,+USA/@44.7977668,-106.9575272,17z/data=!4m6!3m5!1s0x5335fabc2a650d27:0x3092109ed30c1089!8m2!3d44.797763!4d-106.9549523!16s%2Fg%2F11mhk1k70v?entry=ttu&g_ep=EgoyMDI1MTAwNy4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noreferrer"
            >
              <FaLocationDot color="white" size={25} />
              30 N Gould St, STE 4000, Sheridan, WY 82801, USA
            </a>
          </div>
          <div className="social-info">
            <a
              href="https://wa.me/+923261112555"
              target="_blank"
              rel="noreferrer"
            >
              <FaWhatsapp color="white" size={25} />
            </a>
            <a
              href="https://www.youtube.com/@SUSIExperts"
              target="_blank"
              rel="noreferrer"
            >
              <IoLogoYoutube color="white" size={25} />
            </a>
            <a
              href="https://www.instagram.com/susiexperts/"
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
      <div className={`Navbar ${addColor ? "navbar-inner" : ""}`}>
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

      <div className={`NavbarMobile ${addColor ? "navbar-mobile-color" : ""}`}>
        <div className="SiteLink">
          <a href="/">
            <img src="/Images/whiteLogo.png" alt="" />
          </a>
        </div>
        <button className="MenuButton" onClick={toggleSidebar}>
          <RiMenu3Fill size={20} />
        </button>
        <div
          className={`NavbarMobileLinks ${isOpen ? "NavbarMobileOpen" : ""} `}
        >
          <button className="CloseMenu" onClick={toggleSidebar}>
            <IoClose size={30} color="black" />
          </button>
          <div className="NavbarLinks">
            <a href="" className="MobileMenuLogo">
              <img src="/Images/LogoVector.png" alt="" />
            </a>
            <HashLink smooth to="/#about-us" onClick={toggleSidebar}>
              About Us
            </HashLink>
            <HashLink smooth to="/#our-services" onClick={toggleSidebar}>
              our services
            </HashLink>
            <HashLink smooth to="/#faqs" onClick={toggleSidebar}>
              Faq's
            </HashLink>

            <HashLink smooth to="/#contact-us" onClick={toggleSidebar}>
              contact us
            </HashLink>
          </div>
        </div>
      </div>
    </>
  );
}
