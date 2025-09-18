import { Link, useLocation } from "react-router-dom";

export default function NiwServiceTabs() {
  const location = useLocation();
  const active = location.pathname;

  return (
    <div className="Tabs">
      <Link
        to="/eb2-niv"
        className={`SisuButton1 ${active === "/eb2-niv" ? "activeTab" : ""}`}
      >
        NIW
      </Link>

      <Link
        to="/eb2-niv/niw-requirements"
        className={`SisuButton1 ${
          active === "/eb2-niv/niw-requirements" ? "activeTab" : ""
        }`}
      >
        NIW Requirements
      </Link>
      <Link
        to="/eb2-niv/legal-fee-niw"
        className={`SisuButton1 ${
          active === "/eb2-niv/legal-fee-niw" ? "activeTab" : ""
        }`}
      >
        Legal Fees of NIW
      </Link>

      <Link
        to="/eb2-niv/processing-of-niw"
        className={`SisuButton1 ${
          active === "/eb2-niv/processing-of-niw" ? "activeTab" : ""
        }`}
      >
        Processing of NIW
      </Link>

      <Link
        to="/eb2-niv/benefits-of-niw"
        className={`SisuButton1 ${
          active === "/eb2-niv/benefits-of-niw" ? "activeTab" : ""
        }`}
      >
        Benefits of NIW
      </Link>

      <Link
        to="/eb2-niv/niw-faqs"
        className={`SisuButton1 ${
          active === "/eb2-niv/niw-faqs" ? "activeTab" : ""
        }`}
      >
        NIW Faqs
      </Link>

      <Link
        to="/eb2-niv/niw-success"
        className={`SisuButton1 ${
          active === "/eb2-niv/niw-success" ? "activeTab" : ""
        }`}
      >
        NIW Success
      </Link>
    </div>
  );
}
