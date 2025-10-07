import { Link, useLocation } from "react-router-dom";

export default function I485GreenCardApplicationTabs() {
  const location = useLocation();
  const active = location.pathname;

  const tabs = [
    { path: "/I-485-green-card-application", label: "I-485-adjustment-of-status" },
    { path: "/I-485-green-card-application/I-140-and-I-485-concurrent-filing", label: "I-140-and-I-485-concurrent-filing" },
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
