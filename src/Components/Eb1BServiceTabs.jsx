import { Link, useLocation } from "react-router-dom";

export default function Eb1BServiceTabs() {
  const location = useLocation();
  const active = location.pathname;

  const tabs = [
    { path: "/eb1-b", label: "EB1-B Overview" },
    { path: "/eb1-b/eb1-b-legal-fee", label: "Legal Fees fo EB1-B" },
    { path: "/eb1-b/processing-of-eb1-b", label: "Processing of EB1-B" },
    { path: "/eb1-b/eb1-b-faqs", label: "EB1-B Faqs" },
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
