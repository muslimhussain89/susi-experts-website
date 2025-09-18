import { Outlet } from "react-router-dom";

export default function Eb2NiwOutlet() {
  return (
    <div className="ServicePage">
      <div className="ServicesWrapper">
        <div className="Container">
          <h1 className="PageHead">Immigiration Petition / EB2-NIW</h1>
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
            <a href="/profile-evaluation">Evaluate Profile for EB2-NIW</a>
          </button>
        </div>
        <div className="overlay"></div>
      </div>
      <Outlet /> {/* Child components will be rendered here */}
    </div>
  );
}
