import ServicesBread from "../../Components/ServicesBread";
import LaborCertificationServiceTabs from "../../Components/LaborCertificationServiceTabs";
import { LaborCertificationOverview } from "../../Components/AllServicesContent";
export default function LaborCertification() {
  return (
    <>
      <ServicesBread bread3={"Labor Certification and PERM Filing"} />

      <div className="ServiceDetailSection">
        <div className="Container">
          <p className="service-name">
            Labor Certification and PERM Filing
          </p>

          <LaborCertificationServiceTabs />

          <p className="ServiceContent">
            {LaborCertificationOverview.map((item, index) => (
              <div key={index}>{item}</div>
            ))}
          </p>
        </div>
      </div>
    </>
  );
}
