import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./OurClasses.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";

const OurClasses = () => {
  return (
    <div className=" py-6 mb-6">
      <div className="text-center">
        <h1 className="text-5xl text-[#1C222F]">Our Classes</h1>
        <p className="text-xl text-[#EA6044] mt-2">Choose your style</p>
      </div>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        style={{ paddingTop: "50px", paddingBottom: "50px" }}
      >
        <SwiperSlide
          style={{
            width: "400px",
            height: "400px",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SwiperSlide>
        <SwiperSlide style={{ width: "400px", height: "400px" }}>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide style={{ width: "400px", height: "400px" }}>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
        <SwiperSlide style={{ width: "400px", height: "400px" }}>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide>
        <SwiperSlide style={{ width: "400px", height: "400px" }}>
          <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
        </SwiperSlide>
        <SwiperSlide style={{ width: "400px", height: "400px" }}>
          <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
        </SwiperSlide>
        <SwiperSlide style={{ width: "400px", height: "400px" }}>
          <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
        </SwiperSlide>
        <SwiperSlide style={{ width: "400px", height: "400px" }}>
          <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
        </SwiperSlide>
        <SwiperSlide style={{ width: "400px", height: "400px" }}>
          <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default OurClasses;
