const PopularClasses = () => {
  return (
    <div className="my-10">
      <div className="text-center">
        <h1 className="text-5xl">Popular Classes</h1>
        <p className="text-xl text-[#EA6044] mt-2 capitalize">
          many students choose this class
        </p>
      </div>
      <div>
        <div className="grid lg:grid-cols-4">
          <div className="card-compact bg-base-100">
            <figure>
              <img
                src="https://i.ibb.co/R64JZ2R/Untitled-2-01.png"
                alt="dance"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Show Details</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularClasses;
