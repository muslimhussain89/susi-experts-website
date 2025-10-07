import { ImmigrantVisaProcessingContent, NiwEntrepreneur } from "../../Components/AllServicesContent";
import ServicesBread from "../../Components/ServicesBread";
import Sidebar from "../../Components/Sidebar";

export default function ImmigrantVisaProcessing() {
  return (
    <div>
      <div className="ServicesWrapper">
        <div className="Container">
          <h1 className="PageHead">
            Immigiration Petition / Immigrant Visa Processing
          </h1>
          <p>
            The Immigration and Nationality Act (INA) provides two main pathways
            to obtain permanent resident status (a green card). One option is
            for an individual with an approved immigrant petition and an
            immediately available visa number to apply for an immigrant visa
            through a U.S. Department of State consulate abroad. Upon approval,
            the individual can enter the United States and be admitted as a
            permanent resident. This process is known as Immigrant Visa
            Processing (IVP).
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
              <ServicesBread bread3={"Immigrant Visa Processing"} />

              <p className="service-name">Immigrant Visa Processing</p>

              <p className="ServiceContent">
                {ImmigrantVisaProcessingContent.map((item, index) => (
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
