import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

const ImageSwiper = () => {
  const [images, setImages] = useState([
    "https://via.placeholder.com/800x400/FF5733/FFF?text=Image+1",
    "https://via.placeholder.com/800x400/33FF57/FFF?text=Image+2",
    "https://via.placeholder.com/800x400/3357FF/FFF?text=Image+3",
  ]);

  return (
    <Swiper
      modules={[Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      autoplay={{ delay: 3000 }} // 3 seconds per slide
      loop={true}
    >
      {images.map((img, index) => (
        <SwiperSlide key={index}>
          <img src={img} alt={`Slide ${index + 1}`} className="w-full h-auto" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ImageSwiper;
