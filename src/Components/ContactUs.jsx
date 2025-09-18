export default function ContactUs() {
  return (
    <div className="ContactUs" id="contact-us">
        <div className="Container">
          <div className="ContactUsLeft">
            <p className="SmallHead">Contact us</p>
            <h2 className="HeadFont">Let's Connect With Us</h2>
            <form action="">
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
              <input type="number" placeholder="Number" />
              <textarea name="" id="" placeholder="Message"></textarea>
              <button>Send</button>
            </form>
          </div>
          <div className="ContactUsRight">
            <img src="/Images/contactUs.webp" alt="" />
          </div>
        </div>
      </div>
  )
}
