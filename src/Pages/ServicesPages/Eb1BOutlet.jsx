import { Outlet } from "react-router-dom";
import Sidebar from "../../Components/Sidebar";

export default function Eb1BOutlet() {
  return (
    <div className="ServicePage">
      <div className="ServicesWrapper">
        <div className="Container">
          <h1 className="PageHead">Immigiration Petition / EB1-B </h1>
          <p>
            EB1-B is a subcategory of priority worker . To qualify under this
            classification, the petition must demonstrate international
            recognition for being outstanding in a particular academic field.
            The applicant must also have at least three years of teaching or
            research experience in that field. Although labor certification is
            not required, the foreign national must have a permanent job offer
            from a sponsoring employer. For positions at colleges or
            universities, the role must be tenured or tenure-track.
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
