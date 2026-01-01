import { useState } from "react";
import { ClipLoader } from "react-spinners";
import { Link } from "react-router-dom";
export default function ContactUs() {

  function ContactForm() {
    // spinner loader
    let [loading, setLoading] = useState(false);
    let [color, setColor] = useState("black");

    function validEmail(email) {
      var re =
        /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
      return re.test(email);
    }

    function getFormData(form) {
      var elements = form.elements;

      var fields = Object.keys(elements)
        .filter(function (k) {
          return elements[k].name !== "honeypot";
        })
        .map(function (k) {
          if (elements[k].name !== undefined) {
            return elements[k].name;
          } else if (elements[k].length > 0) {
            return elements[k].item(0).name;
          }
        })
        .filter(function (item, pos, self) {
          return self.indexOf(item) == pos && item;
        });

      var formData = {};
      fields.forEach(function (name) {
        var element = elements[name];
        formData[name] = element.value;
        if (element.length) {
          var data = [];
          for (var i = 0; i < element.length; i++) {
            var item = element.item(i);
            if (item.checked || item.selected) {
              data.push(item.value);
            }
          }
          formData[name] = data.join(", ");
        }
      });

      // add form-specific values into the data
      formData.formDataNameOrder = JSON.stringify(fields);
      formData.formGoogleSheetName = form.dataset.sheet || "Sheet1"; // default sheet name
      formData.formGoogleSendEmail = form.dataset.email || ""; // no email by default
      console.log(formData);
      return formData;
    }

    function handleFormSubmit(event) {
      event.preventDefault();
      const form = event.target;
      const data = getFormData(form);
      console.log(data.Name);

      if (data.email && !validEmail(data.email)) {
        var invalidEmail = form.querySelector(".email-invalid");
        if (invalidEmail) {
          invalidEmail.style.display = "block";
          return false;
        }
      } else {
        setLoading(true);
        disableAllButtons(form);
        var url = form.action;
        var xhr = new XMLHttpRequest();
        xhr.open("POST", url);
        xhr.setRequestHeader(
          "Content-Type",
          "application/x-www-form-urlencoded"
        );
        xhr.onreadystatechange = function () {
          console.log(xhr.status, xhr.statusText);
          console.log(xhr.responseText);
          var formElements = form.querySelector(".form-elements");
          if (formElements) {
            formElements.style.display = "none"; // hide form
          }
          var thankYouMessage = form.querySelector(".thankyou_message");
          var Send_Spinner = form.querySelector(".Send_Spinner");
          if (thankYouMessage) {
            setLoading(false);
            thankYouMessage.style.display = "flex";
            Send_Spinner.style.display = "none";
          }
          return;
        };
        var encoded = Object.keys(data)
          .map(function (k) {
            return encodeURIComponent(k) + "=" + encodeURIComponent(data[k]);
          })
          .join("&");
        xhr.send(encoded);
      }
    }

    function disableAllButtons(form) {
      var buttons = form.querySelectorAll("button");
      for (var i = 0; i < buttons.length; i++) {
        buttons[i].disabled = true;
      }
    }

    return (
      <form
        className="gform pure-form pure-form-stacked"
        onSubmit={handleFormSubmit}
        data-email="contactsusiexperts@gmail.com"
        action="https://script.google.com/macros/s/AKfycbyzdul5NSggaNQ75ECet0z11k7rfTwfh5ELZ0C99R1dhxgbZB5UB3b-VuhYNngveb9t/exec"
      >
            <input type="text" placeholder="Name" name="Name"  />
            <input type="email" placeholder="Email" name="Email"  />
            <input type="number" placeholder="Number" name="Number"  />
            <textarea name="Message" id="" placeholder="Message" ></textarea>
        <div className="Send_Spinner">
          <button className="submit press-effect ">Send</button>
          <div className="sweet-loading">
            <ClipLoader
              color={color}
              loading={loading}
              size={30}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </div>
        </div>
        <div className="thankyou_message">
          <h1>Your message has been sent successfully.<br></br>we’ll get in touch soon</h1>
          <div className="close-btn">
            <Link onClick={() => window.location.reload()} to="/">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
              </svg>
            </Link>
          </div>
        </div>
      </form>
    );
  }


  return (
    <div className="ContactUs" id="contact-us">
      <div className="Container">
        <div className="ContactUsLeft">
          <p className="SmallHead">Contact us</p>
          <h2 className="HeadFont">Let's Connect With Us</h2>
          <ContactForm />
        </div>
        <div className="ContactUsRight">
          {/* <img src="/Images/contactUs.webp" alt="" /> */}
          <img src="/Images/contact-us.png" alt="" />
        </div>
      </div>
    </div>
  );
}
