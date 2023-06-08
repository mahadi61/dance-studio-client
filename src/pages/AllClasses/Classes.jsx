const Classes = () => {
  return (
    <div className="instructor-bg py-8">
      <div className="w-11/12 mx-auto  pt-14">
        <h1 className="my-4 text-4xl text-center text-white">All Classes</h1>
        <div className="grid lg:grid-cols-4 gap-3">
          {/* card 1 */}
          <div className="card-compact  bg-base-100">
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
          {/* card 1 */}
          <div className="card-compact  bg-base-100">
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
          {/* card end */}
        </div>
      </div>
    </div>
  );
};

export default Classes;
