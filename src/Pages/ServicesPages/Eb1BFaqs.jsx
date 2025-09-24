import { useRef, useState } from "react";
import ServicesBread from "../../Components/ServicesBread";
import Eb1ServiceTabs from "../../Components/Eb1ServiceTabs";
import { Eb1B_FAQs } from "../../Components/AllServicesContent";
import { useLocation } from "react-router-dom";
import Eb1BServiceTabs from "../../Components/Eb1BServiceTabs";
export default function Eb1BFaqs() {
  const location = useLocation();
  const active = location.pathname;
  const [openIndex, setOpenIndex] = useState(0);
  const contentRefs = useRef([]);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <ServicesBread
        bread3={"EB1-B"} bread4={"Faq's EB1-B"}
      />

      <div className="ServiceDetailSection">
        <div className="Container">
          <p className="service-name">
            Frequently Asked Questions for EB1-B (Outstanding professors and
            researchers)
          </p>
          {active === "eb1-a-faqs" ? <Eb1ServiceTabs /> : <Eb1BServiceTabs />}

          <div className="ServiceAccordion">
            {Eb1B_FAQs.map((item, index) => (
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
