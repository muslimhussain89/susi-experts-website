import { HashLink } from "react-router-hash-link";

export default function Navbar() {
  return (
    <div className="Navbar">
      <div className="NavbarInner">
        <div className="NavbarLogo">
          <a href="/">
            <img src="../../public/Images/susi-experts-logo.webp" alt="" />
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
  );
}
