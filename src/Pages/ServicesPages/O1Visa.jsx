import { useRef, useState } from "react";
import ServicesBread from "../../Components/ServicesBread";
import { Hb1VisasContent, L1VisaContent, O1VisaConbtent } from "../../Components/AllServicesContent";
import NonImmigrationVisasTabs from "../../Components/NonImmigrationVisasTabs";
export default function O1Visa() {
  const [openIndex, setOpenIndex] = useState(0);
  const contentRefs = useRef([]);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <ServicesBread bread3={"Non Immigiration"} bread4={"O1 Visas"} />

      <div className="ServiceDetailSection">
        <div className="Container">
          <p className="service-name">
            Frequently Asked Questions for O1 Visas
          </p>
          <NonImmigrationVisasTabs />

          <div className="ServiceAccordion">
            {O1VisaConbtent.map((item, index) => (
              <div className="Service-Accordion-item" key={index}>
                <button
                  className="accordion-header"
                  onClick={() => toggleAccordion(index)}
                >
                  <p className="ServiceHead"> {item.title}</p>
                </button>
                <div
                  ref={(el) => (contentRefs.current[index] = el)}
                  className={`Service-Accordion-body ${
                    openIndex === index ? "open" : ""
                  }`}
                  style={{
                    maxHeight:
                      openIndex === index
                        ? `${contentRefs.current[index]?.scrollHeight}px`
                        : "0px",
                    transition: "max-height 0.4s ease", // smooth animation
                    overflow: "hidden",
                  }}
                >
                  <p className="ServiceContent">{item.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
