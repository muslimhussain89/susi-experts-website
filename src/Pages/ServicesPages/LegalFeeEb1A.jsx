import ServicesBread from "../../Components/ServicesBread";
import { LeagalFeeEB1A } from "../../Components/AllServicesContent";
import Eb1ServiceTabs from "../../Components/Eb1ServiceTabs";
export default function LegalFeeEb1A() {
  return (
    <>
      <ServicesBread
        bread4={
          "Legal EB1-A Fee"
        }
        bread3={
          "EB1-A"
        }
      />
      <div className="ServiceDetailSection">
        <div className="Container">
          <p className="service-name">
            Legal Fee of EB1-A 
          </p>
          <Eb1ServiceTabs />

          <p className="ServiceContent">
            {LeagalFeeEB1A.map((item, index) => (
              <div key={index}>{item}</div>
            ))}
          </p>
        </div>
      </div>
    </>
  );
}
