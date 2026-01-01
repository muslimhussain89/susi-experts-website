import { Outlet } from "react-router-dom";
import ContactUs from "../../Components/ContactUs";
import Sidebar from "../../Components/Sidebar";

export default function LaborCertificationOutlet() {
  return (
    <div className="ServicePage">
      <div className="ServicesWrapper">
        <div className="Container">
          <h1 className="PageHead">
            Immigiration Petition / Labor Certification and PERM Filing{" "}
          </h1>
          <p>
            Foreign nationals who have been offered permanent employment in the
            U.S. and do not qualify for an exemption from labor certification
            must obtain Alien Employment Certification, commonly known as labor
            certification, from the U.S. Department of Labor (DOL). The DOL must
            be satisfied that there are no qualified U.S. workers available to
            fill the permanent position offered to the foreign national and that
            the wages and working conditions for the role will not adversely
            affect the U.S. labor market. Once the labor certification is
            approved, it serves as the basis for filing an employment-based
            second or third preference petition with USCIS.
          </p>
          <button className="SisuButton1">
            <a
              href="https://susiexperts.us/case_evaluation.php"
              target="_blank"
            >
              Evaluate Profile
            </a>
          </button>
        </div>
      </div>
      <div className="Container">
        <div className="page-divider">
          <Sidebar />
          <div className="Outlet">
            <Outlet />
            <p className="ServiceContent">
              <ul>
                <li>
                  <a href="https://www.wegreened.com/EB1A">
                    EB1-A (Alien of Extraordinary Ability)
                  </a>
                </li>
                <li>
                  <a href="https://www.wegreened.com/EB1B-Outstanding-Professors-and-Researchers">
                    (EB1-B or EB1-OR) Outstanding Professors and Researchers
                  </a>
                </li>
                <li>
                  <a href="https://www.wegreened.com/EB1C-Multinational-Executives-or-Managers">
                    EB1-C Multinational Executives or Managers
                  </a>
                </li>
                <li>
                  <a href="https://www.wegreened.com/eb1">
                    EB1 Visa Requirements
                  </a>
                </li>
                <li>
                  <a href="https://www.wegreened.com/EB1A_twopart">
                    Two-Part Approach (the Kazarian case) for EB1-A petitions
                  </a>
                </li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
