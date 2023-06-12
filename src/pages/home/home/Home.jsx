import OurClasses from "../OurClasses/OurClasses";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstructors from "../PopularInstructors/PopularInstructors";
import Banner from "../banner/Banner";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div className="w-11/12 mx-auto">
        <div className="lg:w-9/12 lg:mx-auto">
          <PopularClasses></PopularClasses>
        </div>
        <PopularInstructors></PopularInstructors>
        <OurClasses></OurClasses>
      </div>
    </div>
  );
};

export default Home;
