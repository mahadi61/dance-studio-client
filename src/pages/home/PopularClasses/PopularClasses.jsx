import { useQuery } from "@tanstack/react-query";
import axios from "axios";
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
        <h1 className="text-5xl mb-4">Popular Classes</h1>
      </div>
      <div>
        <div className="grid lg:grid-cols-4 gap-2">
          {popularClass.map((cla, i) => (
            <div key={i} className="card-compact">
              <figure>
                <img
                  className="h-[200px] w-[100%]"
                  src={cla?.classPhoto}
                  alt="dance"
                />
              </figure>
              <div className="card-body ">
                <h2 className="text-center text-2xl font-bold">
                  {cla?.className}
                </h2>
                <div className="card-actions items-center justify-between">
                  <p className="text-xl">Price: ${cla?.price}</p>
                  <p className="text-xl">Available Seats: {cla?.seats}</p>
                  <p className="text-xl">
                    Instructor Name: {cla?.instructorName}
                  </p>
                  <Link to="/classes" className="btn btn-primary btn-sm">
                    See Class
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularClasses;
