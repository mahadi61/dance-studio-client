import OurClasses from "../OurClasses/OurClasses";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstructors from "../PopularInstructors/PopularInstructors";
import Banner from "../banner/Banner";

const Home = () => {
  console.log(import.meta.env.VITE_apiKey);

  return (
    <div>
      <Banner></Banner>
      <div className="w-11/12 mx-auto">
        <PopularClasses></PopularClasses>
        <PopularInstructors></PopularInstructors>
        <OurClasses></OurClasses>
      </div>
    </div>
  );
};

export default Home;
