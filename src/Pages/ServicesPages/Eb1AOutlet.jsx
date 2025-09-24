import { Outlet } from "react-router-dom";
import ContactUs from "../../Components/ContactUs";
import Sidebar from "../../Components/Sidebar";

export default function Eb1AOutlet() {
  return (
    <div className="ServicePage">
      <div className="ServicesWrapper">
        <div className="Container">
          <h1 className="PageHead">Immigiration Petition / EB1-A </h1>
          <p>
            The EB-2 National Interest Waiver (NIW) is a special option under
            the employment-based second preference category that lets eligible
            individuals apply for a green card on their own, without requiring a
            job offer or employer-sponsored labor certification.This waiver is
            designed for individuals whose work in the United States holds
            significant value and national importance, making the traditional
            labor market test unnecessary for the country’s best interests.
          </p>
          <button className="SisuButton1">
            <a href="/profile-evaluation">Evaluate Profile for EB1-A</a>
          </button>
        </div>
        <div className="overlay"></div>
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
      <ContactUs />
    </div>
  );
}
