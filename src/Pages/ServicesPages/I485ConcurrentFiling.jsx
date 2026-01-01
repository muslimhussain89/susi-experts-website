import ServicesBread from "../../Components/ServicesBread";
import { I485ConcurrentFilingContent } from "../../Components/AllServicesContent";
import I485GreenCardApplicationTabs from "../../Components/I485GreenCardApplicationTabs";
import { useRef, useState } from "react";
export default function I485ConcurrentFiling() {
  const [openIndex, setOpenIndex] = useState(0);
  const contentRefs = useRef([]);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <ServicesBread bread3={"I-140 and I-485 Application Faq's"} />

      <div className="ServiceDetailSection">
        <div className="Container">
          <p className="service-name">Frequently Asked Questions of Form I-140(Immigrant Petition for Alien Worker) and Concurrent Filing of I-140 and I-485</p>

          <I485GreenCardApplicationTabs />

          <div className="ServiceAccordion">
            {I485ConcurrentFilingContent.map((item, index) => (
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
