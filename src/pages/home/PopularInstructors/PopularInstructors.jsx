const PopularInstructors = () => {
  return (
    <div>
      <div className="text-center">
        <h1 className="text-5xl text-[#1C222F]">Popular Instructors</h1>
      </div>
      <div className="grid grid-cols-3 mt-3">
        <div className="flex flex-col gap-1 items-center">
          <img
            className="w-[300px] h-[300px] rounded-full"
            src="https://i.ibb.co/R64JZ2R/Untitled-2-01.png"
            alt="Shoes"
          />
          <p className="text-2xl font-bold capitalize">Instructor name</p>
        </div>
      </div>
    </div>
  );
};

export default PopularInstructors;
