import { useRef, useState } from "react";
import ContactUs from "../../Components/ContactUs";
import { Link } from "react-router-dom";
import ServicesBread from "../../Components/ServicesBread";
import { Eb1AOverview } from "../../Components/AllServicesContent";
import Eb1ServiceTabs from "../../Components/Eb1ServiceTabs";
export default function Eb1A() {
  const [openIndex, setOpenIndex] = useState(0);
  const contentRefs = useRef([]);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <ServicesBread bread3={"EB1-A"} />

      <div className="ServiceDetailSection">
        <div className="Container">
          <p className="service-name">EB1-A (Alien of Extraordinary Ability)</p>

          <Eb1ServiceTabs />

          <div className="ServiceAccordion">
            {Eb1AOverview.map((item, index) => (
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
