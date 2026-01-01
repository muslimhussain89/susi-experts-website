import ContactUs from "../Components/ContactUs";

export default function UsImmigrationMainPage() {
  return (
    <div className="UsImmigrationMainPage">
      <div className="OurServices">
        <div className="ServicesWrapper">
          <div className="Container">
            <h1 className="PageHead">Services / Immigiration Petition</h1>
            <p>At Susiexperts, we specialize in guiding professionals, entrepreneurs, and researchers through every stage of the U.S. immigration process. Our services include EB2-NIW, EB1-A/B, PERM, I-485 green card applications, immigrant visa processing, and non-immigrant visas.We are committed to helping you achieve your American dream with expert support tailored to your unique needs.</p>
            <button className="SisuButton1"> <a href="#immigration-services">Immigration services</a></button>
          </div>
          <div className="overlay"></div>
        </div>
        <div className="ServiceGrid Container" id="immigration-services">
          <p className="SmallHead">Our Services</p>
          <h2 className="HeadFont">Expert immigration guidance</h2>
          <p></p>
          <div className="ServicesContainer">
            <div className="EachService">
              <div className="ServiceImage">
                <img src="/Images/Immigiratioin.svg" alt="" />
              </div>
              <p className="ServiceName">EB2-NIW (National Interest Waiver)</p>
              <p className="ServiceDetials">
                We assist professionals, entrepreneurs, and investors in
                securing U.S. and Canadian visas, ensuring a smooth and
                hassle-free process.
              </p>
              <a href="/eb2-niv">Read More</a>
            </div>
            <div className="EachService">
              <div className="ServiceImage">
                <img src="/Images/GreenCard.svg" alt="" />
              </div>
              <p className="ServiceName">NIW for Entrepreneurs</p>
              <p className="ServiceDetials">
                If your career aspirations involve considering permanent
                residence and employment in the U.S., its the right moment to
                explore your green card options
              </p>
              <a href="/niw-entrepreneurs">Read More</a>
            </div>
            <div className="EachService">
              <div className="ServiceImage">
                <img src="/Images/Degree.svg" alt="" />
              </div>
              <p className="ServiceName">EB1-A (Extraordinary Ability)</p>
              <p className="ServiceDetials">
                We provide degree equivalence services for individuals planning
                to study or immigrate to the U.S. and Canada.
              </p>
              <a href="/eb1-a">Read More</a>
            </div>
            <div className="EachService">
              <div className="ServiceImage">
                <img src="/Images/contribution.svg" alt="" />
              </div>
              <p className="ServiceName">EB1-B (Outstanding Researcher)</p>
              <p className="ServiceDetials">
                We specialize in drafting impactful Summary of Contribution
                documents for U.S. immigration applications. Our concise and
                compelling summaries effectively highlight achievements...
              </p>
              <a href="/eb1-b">Read More</a>
            </div>
            <div className="EachService">
              <div className="ServiceImage">
                <img src="/Images/Recommendation.svg" alt="" />
              </div>
              <p className="ServiceName">PERM (Labor Certification)</p>
              <p className="ServiceDetials">
                Our adept team excels in crafting compelling recommendation
                letters tailored to enhance your application. Whether for
                employment, education, or immigration...
              </p>
              <a href="/perm-labor-certification">Read More</a>
            </div>
            <div className="EachService">
              <div className="ServiceImage">
                <img src="/Images/GreenCard.svg" alt="" />
              </div>
              <p className="ServiceName">I-485 Green Card Application </p>
              <p className="ServiceDetials">
                We provide innovative IT services tailored to your business
                needs. From software development to cybersecurity, our solutions
                enhance efficiency, security, and growth.
              </p>
              <a href="/I-485-green-card-application">Read More</a>
            </div>
            <div className="EachService">
              <div className="ServiceImage">
                <img src="/Images/GreenCard.svg" alt="" />
              </div>
              <p className="ServiceName">Immigrant Visa Processing </p>
              <p className="ServiceDetials">
                We provide innovative IT services tailored to your business
                needs. From software development to cybersecurity, our solutions
                enhance efficiency, security, and growth.
              </p>
              <a href="/immigrant-visa-processing">Read More</a>
            </div>
            <div className="EachService">
              <div className="ServiceImage">
                <img src="/Images/GreenCard.svg" alt="" />
              </div>
              <p className="ServiceName">Non Immigration Visas </p>
              <p className="ServiceDetials">
                We provide innovative IT services tailored to your business
                needs. From software development to cybersecurity, our solutions
                enhance efficiency, security, and growth.
              </p>
              <a href="/non-immigration-visas">Read More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
