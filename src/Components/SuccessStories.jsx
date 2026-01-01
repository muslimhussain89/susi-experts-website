import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { IoStar } from "react-icons/io5";

export default function SuccessStories() {
  const images = [
    "/Images/success/dr-abro-success-story.webp",
    "/Images/success/dr-khan-success-story-01.webp",
    "/Images/success/dr-zaghum-success-story.webp",
    "/Images/success/dr.km-success-story.webp",
    "/Images/success/success-story-1.webp",
    "/Images/success/success-story-2.webp",
    "/Images/success/success-story-3.webp",
    "/Images/success/success-story-4.webp",
    "/Images/success/success-story-5.webp",
    "/Images/success/success-story-6.webp",
    "/Images/success/success-story-7.webp",
    "/Images/success/success-story-8.webp",
    "/Images/success/success-story-9.webp",
    "/Images/success/success-story-10.webp",
    "/Images/success/success-story-11.webp",
    "/Images/success/success-story-12.webp",
    "/Images/success/success-story-13.webp",
    "/Images/success/success-story-14.webp",
    "/Images/success/success-story-15.webp",
    "/Images/success/success-story-16.webp",
    "/Images/success/success-story-17.webp",
    "/Images/success/success-story-18.webp",
    "/Images/success/success-story-19.webp",
    "/Images/success/success-story-20.webp",
    "/Images/success/success-story-21.webp",
  ];

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
        150: {
          slidesPerView: 1.1,
          spaceBetween: 10,
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
      {images.map((item, index) => (
        <SwiperSlide key={index}>
          <img src={item} alt={`Success story ${index + 1}`} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
