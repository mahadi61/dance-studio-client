import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const PopularClasses = () => {
  const { data: popularClass = [] } = useQuery({
    queryKey: ["popularClass"],
    queryFn: async () => {
      const res = await axios.get(`http://localhost:5000/popular-class`);
      return res.data;
    },
  });

  return (
    <div className="my-10">
      <div className="text-center">
        <h1 className="text-5xl mb-4 text-[#F2BE22] ">Popular Classes</h1>
      </div>
      <div>
        <div className="grid lg:grid-cols-3 gap-2">
          {popularClass.map((cla, i) => (
            <div key={i}>
              <motion.div whileHover={{ scale: 1.2 }}>
                <div className="rounded-lg card-compact bg-[#a75785] flex flex-col justify-between text-white h-[350px]">
                  <figure>
                    <img
                      className="h-[200px] w-[100%] rounded-lg"
                      src={cla?.classPhoto}
                      alt="dance"
                    />
                  </figure>
                  <div className="card-body ">
                    <h2 className="text-xl font-bold">{cla?.className}</h2>
                    <div className="card-actions flex-col">
                      <div className="flex justify-between w-full">
                        <p className="font-bold">Price: ${cla?.price}</p>
                        <p className="">Available Seats: {cla?.seats}</p>
                      </div>
                      <div className="flex justify-between w-full">
                        <p className="">Instructor: {cla?.instructorName}</p>
                        <Link to="/classes" className="btn btn-primary btn-sm">
                          See Class
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularClasses;
