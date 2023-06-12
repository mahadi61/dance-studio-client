import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const PopularInstructors = () => {
  const { data: popularInstructor = [] } = useQuery({
    queryKey: ["popularInstructor"],
    queryFn: async () => {
      const res = await axios.get(
        `https://dance-studio-server-seven.vercel.app/popular-instructors`
      );
      return res.data;
    },
  });

  return (
    <div>
      <div className="text-center">
        <h1 className="text-5xl text-[#1C222F] my-3">Popular Instructors</h1>
      </div>
      <div className="grid lg:grid-cols-3 gap-3 mt-3">
        {popularInstructor.map((instructor) => (
          <div
            key={instructor?._id}
            className="flex flex-col gap-1 items-center"
          >
            <img
              style={{ clipPath: "circle()" }}
              className="h-60"
              src={instructor?.photoUrl}
              alt="Instructor"
            />
            <p className="text-2xl font-bold capitalize">{instructor?.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularInstructors;
