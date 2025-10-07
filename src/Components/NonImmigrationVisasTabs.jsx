import { Link, useLocation } from "react-router-dom";

export default function NonImmigrationVisasTabs() {
  const location = useLocation();
  const active = location.pathname;

  const tabs = [
    { paths: ["/non-immigration-visas", "/non-immigration-visas/h-1b-visa"], path: "/non-immigration-visas/h-1b-visa", label: "H-1B VISA" },
    { path: "/non-immigration-visas/l1-visa", label: "L1 visa" },
    { path: "/non-immigration-visas/o1-visa", label: "O1 visa" },
    { path: "/non-immigration-visas/j1-visa", label: "J1 visa" },
    { path: "/non-immigration-visas/e1-visa", label: "E1 visa" },
  ];

  return (
    <div className="Tabs">
      {tabs.map((tab) => {
        // handle array of paths vs single path
        const isActive = Array.isArray(tab.paths)
          ? tab.paths.includes(active)
          : active === tab.path;

        return (
          <Link
            key={tab.label}
            to={tab.path} // always use a single "to" path for navigation
            className={`SisuButton1 ${isActive ? "activeTab" : ""}`}
          >
            {tab.label}
          </Link>
        );
      })}
    </div>
  );
}
