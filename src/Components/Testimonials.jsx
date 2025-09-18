import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules"; // ✅ correct
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { IoStar } from "react-icons/io5";

export default function Testimonials() {
  return (
    <Swiper
      className=""
      modules={[Autoplay, Navigation]}
      spaceBetween={0}
      slidesPerView={4}
      // navigation={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: true,
      }}
      breakpoints={{
        150: {
          slidesPerView: 1.2,
          spaceBetween: 0,
          slidesPerGroup: 1,
        },
        600: {
          slidesPerView: 2.2,
          spaceBetween: 20,
          slidesPerGroup: 1,
        },
        992: {
          slidesPerView: 2.5,
          spaceBetween: 40,
          slidesPerGroup: 1,
        },
      }}
      onSlideChange={() => console.log("slide changed")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <div className="TestiWrapper">
          <div className="EachTesti">
            <p>
              <IoStar />
              <IoStar />
              <IoStar />
              <IoStar />
              <IoStar />I am deeply grateful to SUSIExperts Immigration
              Consultants, especially Dr. Abbas and his team, for their
              exceptional support in my EB1A petition. Despite receiving an RFE,
              their strategic approach and professionalism led to quick
              approval. With a Ph.D. in Pathology, I’m thankful for their
              precise, reliable, and timely services, and highly recommend them
              for U.S. immigration.
            </p>
          </div>
          <p className="TestiName">
            Dr. Riffat Mehboob <br></br> <span>EB1-A</span>
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="TestiWrapper">
          <div className="EachTesti">
            <p>
              <IoStar />
              <IoStar />
              <IoStar />
              <IoStar />
              <IoStar />I am Naveed Mehmood, Cryo-Engineer at Bluefors Oy.
              SUSIExperts made my U.S. immigration process seamless with their
              expert documentation, quick responses, and user-friendly fund
              transfer. I’m grateful for their exceptional support and
              professionalism.
            </p>
          </div>
          <p className="TestiName">
            Dr. Naveed Mehmood <br></br> <span>EB-2</span>
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="TestiWrapper">
          <div className="EachTesti">
            <p>
              <IoStar />
              <IoStar />
              <IoStar />
              <IoStar />
              <IoStar />
              As an Associate Professor in Nano Electronics, I sincerely
              appreciate Dr. Abbas and the SUSIExperts team for their
              exceptional support. Their expertise in drafting strong
              recommendation letters, prompt responses, and smooth documentation
              made my U.S. immigration process seamless and stress-free.
            </p>
          </div>
          <p className="TestiName">
            Associate Professor <br></br> <span>EB-2</span>
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="TestiWrapper">
          <div className="EachTesti">
            <p>
              <IoStar />
              <IoStar />
              <IoStar />
              <IoStar />
              <IoStar />I sincerely thank Dr. Abbas and the SUSIExperts team for
              their exceptional support in my NIW EB-2 approval despite an RFE.
              Their expertise and dedication make them highly recommended for
              professionals seeking reliable U.S. immigration services
            </p>
          </div>
          <p className="TestiName">
            Dr. Muhammad Ahmad <br></br> <span>NIW EB-2</span>
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="TestiWrapper">
          <div className="EachTesti">
            <p>
              <IoStar />
              <IoStar />
              <IoStar />
              <IoStar />
              <IoStar />I am deeply grateful to SUSIExperts Consultants,
              especially Dr. Abbas and his team, for their expert guidance and
              seamless NIW EB-2 approval without an RFE. Their professionalism
              and strategic approach have been instrumental in enabling me to
              pursue my passion for sustainable agriculture and
              climate-resilient solutions in the U.S.
            </p>
          </div>
          <p className="TestiName">
            Dr. Muhammad Ahmad <br></br> <span>NIW EB-2</span>
          </p>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
