import { useQuery } from "@tanstack/react-query";

const Classes = () => {
  const { data: allClass = [] } = useQuery(["allClass"], async () => {
    const res = await fetch("http://localhost:5000/classes");
    return res.json();
  });

  return (
    <div className="instructor-bg py-8">
      <div className="w-11/12 mx-auto  pt-14">
        <h1 className="my-4 text-4xl text-center text-white">All Classes</h1>
        <div className="grid lg:grid-cols-4 gap-3">
          {/* show all class approved by admin */}
          {allClass.map((cla) => (
            <>
              <div className="card-compact  bg-base-100">
                <figure>
                  <img
                    className="h-[200px] w-[100%]"
                    src={cla.classPhoto}
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
                    <button className="btn btn-primary btn-sm">
                      Enroll Class
                    </button>
                  </div>
                </div>
              </div>
            </>
          ))}

          {/* card 1 */}

          {/* card end */}
        </div>
      </div>
    </div>
  );
};

export default Classes;
