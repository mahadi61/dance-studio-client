// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Link } from "react-router-dom";
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
            <img
              src="https://i.ibb.co/qgb2ZtD/Untitled-2-01.png"
              className="w-full rounded-lg"
            />
            <div className="absolute flex items-center  pl-8 h-full  bottom-0 bg-gradient-to-r from-[#21223a] to-[rgba(45, 21, 21, 0)]">
              <div className="text-white space-y-7 w-2/3">
                <h2 className="text-6xl font-bold uppercase">
                  We will teach you to Dance
                </h2>
                <p>There are lots of student who come here to learn dancing.</p>
                <div>
                  <Link
                    to="/classes"
                    className="btn btn-primary border-0 mr-4 bg-pink-500"
                  >
                    Explore Classes
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              src="https://i.ibb.co/R64JZ2R/Untitled-2-01.png"
              className="w-full rounded-lg"
            />
            <div className="absolute flex items-center  pl-8 h-full  bottom-0 bg-gradient-to-r from-[#21223a] to-[rgba(45, 21, 21, 0)]">
              <div className="text-white space-y-7 w-2/3">
                <h2 className="text-6xl font-bold uppercase">
                  We will teach you to Dance
                </h2>
                <p>There are lots of student who come here to learn dancing.</p>
                <div>
                  <Link
                    to="/classes"
                    className="btn btn-primary border-0 mr-4 bg-pink-500"
                  >
                    Explore Classes
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              src="https://i.ibb.co/2vnch0v/Untitled-2-01.png"
              className="w-full rounded-lg"
            />
            <div className="absolute flex items-center  pl-8 h-full  bottom-0 bg-gradient-to-r from-[#21223a] to-[rgba(45, 21, 21, 0)]">
              <div className="text-white space-y-7 w-2/3">
                <h2 className="text-6xl font-bold uppercase">
                  We will teach you to Dance
                </h2>
                <p>There are lots of student who come here to learn dancing.</p>
                <div>
                  <Link
                    to="/classes"
                    className="btn btn-primary border-0 mr-4 bg-pink-500"
                  >
                    Explore Classes
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Banner;
