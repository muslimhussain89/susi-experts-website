import Accordion from "react-bootstrap/Accordion";
import { useEffect, useRef, useState } from "react";

// ADD THIS IS MAIN.JSX
// import 'bootstrap/dist/css/bootstrap.min.css';

export default function AskQuestion2() {
  const items = ["0", "1", "2", "3", "4", "5"];
  const intervalMs = 4000;

  const [activeKey, setActiveKey] = useState(items[0]);
  const indexRef = useRef(0);
  const timerRef = useRef(null);

  const startTimer = () => {
    if (!timerRef.current) {
      timerRef.current = setInterval(() => {
        indexRef.current = (indexRef.current + 1) % items.length;
        setActiveKey(items[indexRef.current]);
      }, intervalMs);
    }
  };

  const stopTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
  };

  useEffect(() => {
    startTimer();
    return () => stopTimer(); // cleanup
  }, []);

  const handleHeaderHover = (index) => {
    stopTimer(); // optional: pause auto-cycle when user interacts
    indexRef.current = index;
    setActiveKey(items[index]);
  };
  return (
    <div className="Faqs Container" id="faqs">
      <div className="FaqsTop">
        <p className="SmallHead">Knowledge Center</p>
        <h2 className="HeadFont">FAQs – Find Your Answers Here</h2>
      </div>
      <div className="FaqsContent">
        <Accordion activeKey={activeKey}>
          <Accordion.Item
            eventKey="0"
            onMouseEnter={() => handleHeaderHover(0)}
            onMouseLeave={startTimer}
          >
            <Accordion.Header>
              EB2 – National Interest Waiver (NIW) EXPLORE EB2 - NIW YOUR PATH
              TO U.S. RESIDENCY
            </Accordion.Header>
            <Accordion.Body>
              Simplified Immigration, Exceptional Opportunities: Welcome to the
              EB2-National Interest Waiver (EB2-NIW) program.The Breakthrough:
              National Interest Waiver With EB2-NIW, you can bypass the typical
              job offer and certification process. Showcase how your residency
              benefits the U.S. national interest, and you’re in control – no
              employer sponsorship needed.
            </Accordion.Body>
            {activeKey === "0" && <div className="accordion-progress" />}
          </Accordion.Item>

          <Accordion.Item
            eventKey="1"
            onMouseEnter={() => handleHeaderHover(1)}
            onMouseLeave={startTimer}
          >
            <Accordion.Header>The U.S. Green Card Report</Accordion.Header>
            <Accordion.Body>
              The applicant must provide evidence that their work serves the U.S. national interest. This implies that their work must acutely advance the nation’s interests in the areas of the economy, health, education, or culture.
            </Accordion.Body>
            {activeKey === "1" && <div className="accordion-progress" />}
          </Accordion.Item>

          <Accordion.Item
            eventKey="2"
            onMouseEnter={() => handleHeaderHover(2)}
            onMouseLeave={startTimer}
          >
            <Accordion.Header>
                  ELIGIBILITY CRITERIA
                </Accordion.Header>
            <Accordion.Body>
              The EB2 NIW category does not need a labor certification from the Department of Labor, in contrast to other employment-based visas. This means that in order to qualify for the visa, the applicant does not need to have an employment offer from a U.S. firm.
            </Accordion.Body>
            {activeKey === "2" && <div className="accordion-progress" />}
          </Accordion.Item>

          <Accordion.Item
            eventKey="3"
            onMouseEnter={() => handleHeaderHover(3)}
            onMouseLeave={startTimer}
          >
            <Accordion.Header>
                 Understanding
               </Accordion.Header>
            <Accordion.Body>
              The applicant must provide evidence that they anticipate to work in their area of competence in the United States. Additionally, they must show that they are capable of continuing work in the United States.
            </Accordion.Body>
            {activeKey === "3" && <div className="accordion-progress" />}
          </Accordion.Item>

          <Accordion.Item
            eventKey="4"
            onMouseEnter={() => handleHeaderHover(4)}
            onMouseLeave={startTimer}
          >
            <Accordion.Header>
                 
                EB-2 Category Qualifications
              
               </Accordion.Header>
            <Accordion.Body>
              The applicant has to present documentation of their credentials, including degrees, publications, awards, and other records that show their outstanding talent or advanced education.
            </Accordion.Body>
            {activeKey === "4" && <div className="accordion-progress" />}
          </Accordion.Item>

          <Accordion.Item
            eventKey="5"
            onMouseEnter={() => handleHeaderHover(5)}
            onMouseLeave={startTimer}
          >
            <Accordion.Header>
                 
                                Exploring the Nation of "National Interest"

              
               </Accordion.Header>
            <Accordion.Body>
              The applicant must provide evidence that their work has the potential to greatly advance U.S interests. Benefits in this sense could be cultural, economic, or scientific.
            </Accordion.Body>
            {activeKey === "5" && <div className="accordion-progress" />}
          </Accordion.Item>
          


        </Accordion>
      </div>
    </div>
  );
}
