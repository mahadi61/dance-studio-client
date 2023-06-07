import OurClasses from "../OurClasses/OurClasses";
import PopularClasses from "../PopularClasses/PopularClasses";
import Banner from "../banner/Banner";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div className="w-11/12 mx-auto">
        <PopularClasses></PopularClasses>
        <OurClasses></OurClasses>
      </div>
    </div>
  );
};

export default Home;
