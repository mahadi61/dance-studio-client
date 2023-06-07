// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper";

const Banner = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        autoplay={true}
        modules={[Pagination, Autoplay]}
      >
        <SwiperSlide>
          <div>
            <img src="https://i.ibb.co/qgb2ZtD/Untitled-2-01.png" alt="" />
            <div className="absolute z-10 top-1/2 left-32 text-2xl text-white">
              <h2 className="uppercase">We will teach you to</h2>
              <h1 className="uppercase text-7xl text-white">Dance</h1>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/R64JZ2R/Untitled-2-01.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/2vnch0v/Untitled-2-01.png" alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Banner;
