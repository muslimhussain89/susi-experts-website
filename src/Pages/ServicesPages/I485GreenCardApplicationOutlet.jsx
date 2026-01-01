import { Outlet } from "react-router-dom";
import ContactUs from "../../Components/ContactUs";
import Sidebar from "../../Components/Sidebar";

export default function I485GreenCardApplicationOutlet() {
  return (
    <div className="ServicePage">
      <div className="ServicesWrapper">
        <div className="Container">
          <h1 className="PageHead">
            Immigiration Petition / I-485 Green Card Application{" "}
          </h1>
          <p>
            Form I-485, Application to Register Permanent Residence or Adjust
            Status, is used by foreign nationals who are already in the United
            States on a temporary visa and wish to apply for lawful permanent
            resident status (a green card). By filing this form, applicants
            request a change from nonimmigrant status to immigrant status,
            provided they meet the eligibility requirements.
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
