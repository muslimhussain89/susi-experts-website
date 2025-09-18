import ServicesBread from "../../Components/ServicesBread";
import { LeagalFeeNIW } from "../../Components/AllServicesContent";
import NiwServiceTabs from "../../Components/NiwServiceTabs";
export default function LegalFeeNIW() {
  return (
    <>
      <ServicesBread
        bread4={
          "Legal NIW Fee"
        }
      />
      <div className="ServiceDetailSection">
        <div className="Container">
          <p className="service-name">
            Choose SUSI EXPERTS for your NIW Application
          </p>
          <NiwServiceTabs />

          <p className="ServiceContent">
            {LeagalFeeNIW.map((item, index) => (
              <div key={index}>{item}</div>
            ))}
          </p>
        </div>
      </div>
    </>
  );
}
