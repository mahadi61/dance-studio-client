import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./OurClasses.css";

// import required modules
import { Autoplay, EffectCoverflow, Pagination } from "swiper";

const OurClasses = () => {
  return (
    <div className=" py-6 mb-6">
      <div className="text-center">
        <h1 className="text-5xl text-[#1C222F] capitalize">
          Our Classes Best dancer
        </h1>
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
        autoplay={{ delay: 1000 }}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        style={{ paddingTop: "50px", paddingBottom: "50px" }}
      >
        <SwiperSlide
          style={{
            width: "400px",
            height: "",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <img src="https://img.freepik.com/free-photo/front-view-male-dancer-jeans-tank-top-dancing_23-2148417961.jpg?w=2000" />
        </SwiperSlide>
        <SwiperSlide style={{ width: "400px", height: "" }}>
          <img src="https://kevsbest.com/wp-content/uploads/2021/01/5-Best-Dance-Instructors-in-Phoenix.png" />
        </SwiperSlide>
        <SwiperSlide style={{ width: "400px", height: "" }}>
          <img src="https://thumbs.dreamstime.com/b/street-style-stylish-men-women-dancing-hip-hop-casual-youth-clothes-gradient-purple-pink-background-dance-hall-229827720.jpg" />
        </SwiperSlide>
        <SwiperSlide style={{ width: "400px", height: "" }}>
          <img src="https://thumbs.dreamstime.com/b/doing-your-best-personal-achievement-goal-man-dancing-grey-background-doing-your-best-personal-achievement-goal-man-dancing-244366682.jpg" />
        </SwiperSlide>
        <SwiperSlide style={{ width: "400px", height: "" }}>
          <img src="https://static.wixstatic.com/media/9e81d1_08cc972d5e424ba3810f25921711e454~mv2.jpg/v1/fill/w_640,h_474,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/9e81d1_08cc972d5e424ba3810f25921711e454~mv2.jpg" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default OurClasses;
