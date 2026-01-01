import ServicesBread from "../../Components/ServicesBread";
import { LeagalFeeEB1B } from "../../Components/AllServicesContent";
import Eb1BServiceTabs from "../../Components/Eb1BServiceTabs";
export default function LegalFeeEb1B() {
  return (
    <>
      <ServicesBread
        bread4={
          "Legal EB1-B Fee"
        }
        bread3={
          "EB1-B"
        }
      />
      <div className="ServiceDetailSection">
        <div className="Container">
          <p className="service-name">
            Legal Fee of EB1-B 
          </p>
          <Eb1BServiceTabs />

          <p className="ServiceContent">
            {LeagalFeeEB1B.map((item, index) => (
              <div key={index}>{item}</div>
            ))}
          </p>
        </div>
      </div>
    </>
  );
}
