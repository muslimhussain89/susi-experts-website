import { Link, useLocation } from "react-router-dom";

export default function LaborCertificationServiceTabs() {
  const location = useLocation();
  const active = location.pathname;

  const tabs = [
    { path: "/perm-labor-certification", label: " PERM Overview" },
    { path: "/perm-labor-certification/perm-labor-certification-faqs", label: "PERM FAQs" },
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
