import { Link, useLocation } from "react-router-dom";

export default function NiwServiceTabs() {
  const location = useLocation();
  const active = location.pathname;

  const tabs = [
    { path: "/eb2-niv", label: "NIW" },
    { path: "/eb2-niv/niw-requirements", label: "NIW Requirements" },
    { path: "/eb2-niv/legal-fee-niw", label: "Legal Fees of NIW" },
    { path: "/eb2-niv/processing-of-niw", label: "Processing of NIW" },
    { path: "/eb2-niv/benefits-of-niw", label: "Benefits of NIW" },
    { path: "/eb2-niv/niw-faqs", label: "NIW Faqs" },
    { path: "/eb2-niv/niw-success", label: "NIW Success" },
  ];

  return (
    <div className="Tabs">
      {tabs.map((tab) => (
        <Link
          key={tab.path}
          to={tab.path}
          className={`SisuButton1 ${active === tab.path ? "activeTab" : ""}`}
        >
          {tab.label}
        </Link>
      ))}
    </div>
  );
}
