import React, { useState } from 'react'

export default function ProfileEvaluationForm() {
      const [recorded, setrecorded] = useState(false);
        const [name, setName] = useState("");
      
        const handleRecord = (e) => {
          e.preventDefault(); // stop page navigation
      
          const formData = new FormData();
          formData.append("entry.1795383383", name);
      
          // send to Google Forms in the background
          fetch(
            "https://docs.google.com/forms/u/0/d/e/1FAIpQLSeRi33VeJCQcDGFPCdhB65YwRbhXk3qB2XAbib102WMUhiTgA/formResponse",
            {
              method: "POST",
              body: formData,
              mode: "no-cors", // required due to Google not sending CORS headers
            }
          ).finally(() => {
            setrecorded(true); // show the div regardless
            setName(""); // optionally clear the input
          });
        };
  return (
      
    <>
    <div className="EvaluationForm">
        <form
          action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSeRi33VeJCQcDGFPCdhB65YwRbhXk3qB2XAbib102WMUhiTgA/formResponse"
          method="POST"
        >
          <input
            type="text"
            name="entry.1795383383"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input type="submit" value="Submit" onClick={handleRecord} />
        </form>
      </div>

      {recorded && (
        <div className="FormSubmited">
          <p>Record submited Succussfully <IoClose onClick={() => {setrecorded(false)}} /></p>
          
        </div>
      )}
      
    </>
  )
}
