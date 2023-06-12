import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { motion } from "framer-motion";

const PopularInstructors = () => {
  const { data: popularInstructor = [] } = useQuery({
    queryKey: ["popularInstructor"],
    queryFn: async () => {
      const res = await axios.get(`http://localhost:5000/popular-instructors`);
      return res.data;
    },
  });

  return (
    <div>
      <div className="text-center">
        <h1 className="text-5xl text-[#F2BE22] my-3">Popular Instructors</h1>
      </div>
      <div className="grid lg:grid-cols-3 gap-6 mt-3">
        {popularInstructor.map((instructor) => (
          <div key={instructor?._id}>
            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
              <div className="flex flex-col gap-1 items-center">
                <img
                  style={{ clipPath: "circle()" }}
                  className="h-60"
                  src={instructor?.photoUrl}
                  alt="Instructor"
                />
                <p className="text-2xl font-bold capitalize">
                  {instructor?.name}
                </p>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularInstructors;
