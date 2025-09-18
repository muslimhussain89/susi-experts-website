import { useRef, useState } from "react";
import ContactUs from "../../Components/ContactUs";
import ServicesBread from "../../Components/ServicesBread";
import { ProcessingNiw } from "../../Components/AllServicesContent";
import NiwServiceTabs from "../../Components/NiwServiceTabs";
export default function ProcessingOfNiW() {
  const [openIndex, setOpenIndex] = useState(0);
  const contentRefs = useRef([]);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <ServicesBread bread4={"Processing Flow of NIW"} />

      <div className="ServiceDetailSection">
        <div className="Container">
          <p className="service-name">Processing Flow of NIW</p>

          <NiwServiceTabs />

          <div className="ServiceAccordion">
            {ProcessingNiw.map((item, index) => (
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
            ))}
          </div>
        </div>
      </div>

      <ContactUs />
    </>
  );
}
