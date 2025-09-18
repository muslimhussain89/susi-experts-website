import { Link } from "react-router-dom";
import ServicesBread from "../../Components/ServicesBread";
import { nivRequirements } from "../../Components/AllServicesContent";
import NiwServiceTabs from "../../Components/NiwServiceTabs";
export default function NiwRequirements() {
  return (
    <>
      <ServicesBread
        bread4={
          "Requirements For Petitioning For the National Interest Waiver (NIW)"
        }
      />
      <div className="ServiceDetailSection">
        <div className="Container">
          <p className="service-name">
            Requirements For Petitioning For the National Interest Waiver (NIW)
          </p>

          <NiwServiceTabs />

          <p className="ServiceContent">
            {nivRequirements.map((item, index) => (
              <div key={index}>{item}</div>
            ))}
          </p>
        </div>
      </div>
    </>
  );
}
