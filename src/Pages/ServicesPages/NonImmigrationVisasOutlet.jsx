import { Outlet } from "react-router-dom";
import ContactUs from "../../Components/ContactUs";
import Sidebar from "../../Components/Sidebar";

export default function NonImmigrationVisasOutlet() {
  return (
    <div className="ServicePage">
      <div className="ServicesWrapper">
        <div className="Container">
          <h1 className="PageHead">
            Immigiration Petition / Non Immigration Visas{" "}
          </h1>
          <p>
            A Non-Immigrant Visa (NIV) allows foreign nationals to enter the
            United States temporarily for purposes such as work, study, tourism,
            or business. Unlike immigrant visas, these do not provide permanent
            residency but grant legal stay for a limited time. Each visa
            category, like H-1B for skilled workers or F-1 for students, is
            designed for specific needs. Our team helps you choose the right
            visa, prepare documents, and guide you through the entire
            application process with ease.
          </p>
          <button className="SisuButton1">
            <a href="https://susiexperts.us/case_evaluation.php" target="_blank">Evaluate Profile</a>
          </button>
        </div>
      </div>
      <div className="Container">
        <div className="page-divider">
          <Sidebar />
          <div className="Outlet">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
