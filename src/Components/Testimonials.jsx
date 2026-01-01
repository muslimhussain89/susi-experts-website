import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { IoStar } from "react-icons/io5";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Dr. Riasat Ali",
      type: "NIW EB-2",
      text: `I, Dr. Riasat Ali, PhD in Biomedicine from Brazil, extend my sincere appreciation to the SUSIExperts team for their outstanding support throughout my U.S. immigration journey. Their meticulous approach to documentation, timely communication, and secure financial transactions made the process seamless and stress-free.

<br /><br />I am grateful for their expertise and dedication, which exceeded my expectations. If you're seeking a reliable partner for U.S. immigration, SUSIExperts is the answer.

<br /><br />Thank you for helping me take this significant step!
`,
    },
    {
      name: "Dr. Allah Wasaya Baloch",
      type: "NIW EB-2",
      text: `I, Dr. Allah Wasaya Baloch, PhD from Norway, extend my heartfelt gratitude to Dr. Abbas and the dedicated team at SUSIExperts Immigration Consultants for their exceptional support in securing the approval of my NIW EB-2 petition, despite the RFE challenge. Their unwavering professionalism, meticulous attention to detail, and in-depth knowledge of US immigration procedures are truly commendable, making them a trusted partner for professionals navigating the complex immigration process. Thank you, Dr. Abbas and team, for helping turn my American dream into a reality!`,
    },
    {
      name: "Dr. Riffat Mehboob",
      type: "EB1-A",
      text: `I am deeply grateful to SUSIExperts, especially Dr. Abbas and his dedicated team, for their outstanding support in my EB1A petition. Despite receiving an RFE, their strategic approach and professionalism ensured a swift approval. With a Ph.D. in Pathology, I truly appreciate their precise, reliable, and timely services and highly recommend them for anyone pursuing U.S. immigration.`,
    },
    {
      name: "Dr. Naveed Mehmood",
      type: "EB-2",
      text: `I am Naveed Mehmood, Cryo-Engineer at Bluefors Oy, and I’m thankful to SUSIExperts for making my U.S. immigration process smooth and effortless. Their expertise in documentation, prompt communication, and secure fund transfer system exceeded my expectations. I highly appreciate their professionalism and dedication throughout every stage of the process.`,
    },
    {
      name: "Associate Professor",
      type: "EB-2",
      text: `As an Associate Professor in Nano Electronics, I deeply appreciate Dr. Abbas and the SUSIExperts Immigration Consultants team for their exceptional guidance and professionalism. Their expertise in preparing strong recommendation letters, prompt responses, and seamless documentation made my U.S. immigration process smooth, transparent, and completely stress-free.`,
    },
    {
      name: "Dr. Muhammad Ahmad",
      type: "NIW EB-2",
      text: `I, Dr. Muhammad Ahmad, sincerely thank Dr. Abbas and the SUSIExperts Immigration Consultants team for their expert support in my NIW EB-2 petition, which was approved successfully despite an RFE. Their professionalism, attention to detail, and deep understanding of immigration procedures make them highly reliable for professionals seeking trusted U.S. immigration guidance.`,
    },
    {
      name: "Dr. Muhammad Aqeel",
      type: "NIW EB-2",
      text: `I, Dr. Muhammad Aqeel, am truly grateful to Dr. Abbas and the SUSIExperts Immigration Consultants for their outstanding assistance in securing my NIW EB-2 approval without an RFE. Their strategic approach, professionalism, and commitment have been instrumental in helping me pursue my passion for sustainable agriculture and climate-resilient innovation in the United States.`,
    },
  ];

  // Track which testimonial is expanded
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleReadMore = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <Swiper
      modules={[Autoplay, Navigation]}
      spaceBetween={0}
      slidesPerView={4}
      autoplay={{
        delay: 3000,
        disableOnInteraction: true,
      }}
      breakpoints={{
        150: { slidesPerView: 1.2, spaceBetween: 0 },
        600: { slidesPerView: 2.2, spaceBetween: 20 },
        992: { slidesPerView: 2.5, spaceBetween: 40 },
      }}
    >
      {testimonials.map((item, index) => (
        <SwiperSlide key={index}>
          <div className="TestiWrapper">
            <div className="EachTesti">
              <p
                className={`testimonial-text ${
                  expandedIndex === index ? "expanded" : ""
                }`}
                dangerouslySetInnerHTML={{
                  __html:
                    [...Array(5)].map(() => "<i class='star'>★</i>").join("") +" "+  
                    item.text,
                }}
              ></p>
              <button
                className="SisuButton1"
                onClick={() => toggleReadMore(index)}
              >
                {expandedIndex === index ? "Close" : "Read More"}
              </button>
            </div>
            <p className="TestiName">
              {item.name} <br />
              <span>{item.type}</span>
            </p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
