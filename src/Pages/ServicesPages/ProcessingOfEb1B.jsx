import { useRef, useState } from "react";
import ServicesBread from "../../Components/ServicesBread";
import { Eb1A_Processing } from "../../Components/AllServicesContent";
import Eb1BServiceTabs from "../../Components/Eb1BServiceTabs";
export default function ProcessingOfEb1B() {
  const [openIndex, setOpenIndex] = useState(0);
  const contentRefs = useRef([]);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <ServicesBread bread3={"EB1-B"} bread4={"Processing Flow of EB1-B"} />

      <div className="ServiceDetailSection">
        <div className="Container">
          <p className="service-name">Processing Flow of EB1-B</p>

          <Eb1BServiceTabs />

          <div className="ServiceAccordion">
            {Eb1A_Processing.map((item, index) => (
              <div className="Service-Accordion-item" key={index}>
                <button
                  className="accordion-header"
                  onClick={() => toggleAccordion(index)}
                >
                  <p
                    className="ServiceHead"
                    dangerouslySetInnerHTML={{ __html: [item.title] }}
                  />
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
            ))}<br /><br /><br />
          </div>
        </div>
      </div>

    </>
  );
}
