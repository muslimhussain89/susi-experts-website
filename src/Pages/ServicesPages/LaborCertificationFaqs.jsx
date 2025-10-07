import { useRef, useState } from "react";
import ContactUs from "../../Components/ContactUs";
import ServicesBread from "../../Components/ServicesBread";
import { LaborCertificationFaqsContent} from "../../Components/AllServicesContent";
import LaborCertificationServiceTabs from "../../Components/LaborCertificationServiceTabs";
export default function LaborCertificationFaqs() {
  const [openIndex, setOpenIndex] = useState(0);
  const contentRefs = useRef([]);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <ServicesBread bread4={"Faqs for EB2 and National Interest Waiver (NIW)"} />

      <div className="ServiceDetailSection">
        <div className="Container">
          <p className="service-name">Frequently Asked Questions for Labor Certification/PERM Process</p>

          <LaborCertificationServiceTabs />

          <div className="ServiceAccordion">
            {LaborCertificationFaqsContent.map((item, index) => (
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
