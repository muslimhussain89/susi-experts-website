import { FaFacebookF } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { PiInstagramLogoFill } from "react-icons/pi";
import { BiLogoLinkedin } from "react-icons/bi";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import ContactUs from "./ContactUs";
import { IoLogoWechat } from "react-icons/io5";
import { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { HashLink } from "react-router-hash-link";

export default function Footer() {
  const [showWidget, setShowWidget] = useState(false);

  const handleToggle = () => {
    setShowWidget(!showWidget);
  };

  // Disable scroll when widget is visible
  useEffect(() => {
    if (showWidget) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Cleanup on component unmount
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showWidget]);

  return (
    <>
      <ContactUs />
      <div className="Footer">
        <div className="Container">
          <div className="FooterLogoSec">
            <a href="/">
              <img src="/Images/whiteLogo.png" alt="" />
            </a>
            <p>
              Thank you for visiting SUSIExperts, a dedicated team of
              professionals offering expert solutions in Content Writing,
              Software Development, Data Science & Analytics, and different IT
              services tailored to your needs. We look forward to working with
              you and helping you achieve your goals through innovation and
              expertise.
            </p>
            <a
              className="Social"
              href="https://www.facebook.com/SUSIExperts"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebookF />
            </a>
            <a
              className="Social"
              href="https://www.youtube.com/@SUSIExperts"
              target="_blank"
              rel="noreferrer"
            >
              <IoLogoYoutube />
            </a>
            <a
              className="Social"
              href="https://www.instagram.com/susiexperts/"
              target="_blank"
              rel="noreferrer"
            >
              <PiInstagramLogoFill />
            </a>
            {/* <a className="Social" href="">
            <BiLogoLinkedin />
          </a> */}
          </div>
          <div className="FooterLinksSec">
            <p>Quick Links</p>
            <div className="FooterLinksWrapper">
              <a href="/">home</a>
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
          <div className="FooterContactSec">
            <p>Get in Touch</p>
            <div className="FooterContactSecWrapper">
              <a href="">
                <MdEmail />
                contact@susiexperts.us
              </a>
              <div className="us-contacts">
                <a
                  href="https://www.google.com/maps/place/30+N+Gould+St+%234000,+Sheridan,+WY+82801,+USA/@44.7977668,-106.9575272,17z/data=!4m6!3m5!1s0x5335fabc2a650d27:0x3092109ed30c1089!8m2!3d44.797763!4d-106.9549523!16s%2Fg%2F11mhk1k70v?entry=ttu&g_ep=EgoyMDI1MTAwNy4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>
                    {" "}
                    <FaLocationDot />
                  </span>
                  <span> 30 N Gould St, STE 4000, Sheridan, WY 82801, USA</span>
                </a>
                <a href="">
                  <FaPhoneAlt />
                  +1 771 222 2095
                </a>
              </div>
              <div className="pak-contacts">
                <a
                  href="https://www.google.com/maps/dir/33.5314944,73.1840512/SUSIExperts,+Markaz,+VISTA+I+8+Markaz+I-8,+Islamabad/@33.595847,73.0444782,12z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x38df959fbe482967:0x7d3fed86edc95636!2m2!1d73.0752068!2d33.6676974?entry=ttu&g_ep=EgoyMDI1MDkyOC4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>
                    {" "}
                    <FaLocationDot />
                  </span>
                  <span>
                    Office #601, VISTA, I-8 Markaz, Islamabad, Pakistan
                  </span>
                </a>
                <a href="">
                  <FaPhoneAlt />
                  +92 326 1112555
                </a>
              </div>
              <div className="pak-contacts">
                <a
                  href="https://www.google.com/maps/place/Wan+An+Lu,+Shang+Hai+Shi,+China/@31.6476245,121.3546551,17z/data=!3m1!4b1!4m6!3m5!1s0x35b272239aec5773:0xd29c1235cf85d235!8m2!3d31.64762!4d121.35723!16s%2Fg%2F1vf99c8b?entry=ttu&g_ep=EgoyMDI1MTAwNy4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>
                    {" "}
                    <FaLocationDot />
                  </span>
                  <span>
                    {" "}
                    Room 438C, 4F, No.319 Wan'an Road, Hongkou District,
                    Shanghai
                  </span>
                </a>
                <p onClick={handleToggle}>
                  <IoLogoWechat />
                  SUSIEXPERTS
                </p>
              </div>

              {showWidget && (
                <div className="we-chat-widget">
                  <div className="we-chat-image-wraper">
                    <img src="/Images/susi-wechat.jpeg" alt="susi-wechat" />
                  </div>
                  <button onClick={handleToggle}>
                    <IoMdClose color="white" size={35} />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="Rights">
        <p>Copyright © 2025 SUSIE, All Rights Reserved</p>
      </div>
    </>
  );
}
