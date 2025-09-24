import ServicesBread from "../../Components/ServicesBread";
import { Eb1BOverview } from "../../Components/AllServicesContent";
import Eb1BServiceTabs from "../../Components/Eb1BServiceTabs";
export default function Eb1B() {
  return (
    <>
      <ServicesBread bread3={"EB1-B"} />

      <div className="ServiceDetailSection">
        <div className="Container">
          <p className="service-name">
            EB1-B (Outstanding Professors and Researchers)
          </p>

          <Eb1BServiceTabs />

          <p className="ServiceContent">
            {Eb1BOverview.map((item, index) => (
              <div key={index}>{item}</div>
            ))}
          </p>
        </div>
      </div>
    </>
  );
}
