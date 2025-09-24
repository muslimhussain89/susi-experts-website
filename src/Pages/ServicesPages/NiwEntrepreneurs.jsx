import { NiwEntrepreneur } from "../../Components/AllServicesContent";
import ServicesBread from "../../Components/ServicesBread";
import Sidebar from "../../Components/Sidebar";

export default function NiwEntrepreneurs() {
  return (
    <div>
      <div className="ServicesWrapper">
        <div className="Container">
          <h1 className="PageHead">
            Immigiration Petition / NIW for Entrepreneurs
          </h1>
          <p>
            The National Interest Waiver (NIW) provides a pathway for
            individuals to apply for a green card without employer sponsorship
            if their work demonstrates substantial value to the United States.
            Although the NIW is traditionally linked to academic professionals,
            recent policy changes emphasize its growing relevance for
            entrepreneurs and innovative ventures.
          </p>
          <button className="SisuButton1">
            <a href="/profile-evaluation">Evaluate Profile for Entrepreneurs</a>
          </button>
        </div>
        <div className="overlay"></div>
      </div>
      <div className="Container">
        <div className="page-divider">
          <Sidebar />
          <div className="ServiceDetailSection">
            <div className="Container">
              <ServicesBread bread3={"NIW for Entrepreneurs"} />

              <p className="service-name">NIW for Entrepreneurs</p>

              <p className="ServiceContent">
                {NiwEntrepreneur.map((item, index) => (
                  <div key={index}>{item}</div>
                ))}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
