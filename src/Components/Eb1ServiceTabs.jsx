import { Link, useLocation } from "react-router-dom";

export default function Eb1ServiceTabs() {
  const location = useLocation();
  const active = location.pathname;

  const tabs = [
    { path: "/eb1-a", label: "EB1-A Overview" },
    { path: "/eb1-a/eb1-a-legal-fee", label: "Legal Fees fo EB1-A" },
    { path: "/eb1-a/processing-of-eb1-a", label: "Processing of EB1-A" },
    { path: "/eb1-a/eb1-a-faqs", label: "EB1-A Faqs" },
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
