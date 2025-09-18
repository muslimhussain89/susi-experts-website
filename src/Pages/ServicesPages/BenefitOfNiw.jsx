import ServicesBread from "../../Components/ServicesBread";
import { BenefitNiw } from "../../Components/AllServicesContent";
import NiwServiceTabs from "../../Components/NiwServiceTabs";
export default function BenefitOfNiw() {
  return (
    <>
      <ServicesBread
        bread4={
          "Benefits of Petitioning Under the EB-2 (NIW) Standard"
        }
      />
      <div className="ServiceDetailSection">
        <div className="Container">
          <p className="service-name">
            The Benefits of Petitioning Under the EB-2 National Interest Waiver (NIW) Standard
          </p>
          <NiwServiceTabs />

          <p className="ServiceContent">
            {BenefitNiw.map((item, index) => (
              <div key={index}>{item}</div>
            ))}
          </p>
        </div>
      </div>
    </>
  );
}
