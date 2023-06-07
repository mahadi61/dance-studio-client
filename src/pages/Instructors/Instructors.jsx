import "./Instuctors.css";

const Instructors = () => {
  return (
    <div className="instructor-bg">
      <div className="w-11/12 mx-auto text-white pt-20">
        <h1 className="my-3 text-4xl text-center">All Instructors</h1>
        <div className="overflow-x-auto">
          <table className="table text-center my-6">
            {/* head */}
            <thead>
              <tr>
                <th className="text-white">S/L</th>
                <th className="text-white">Photo</th>
                <th className="text-white">Name</th>
                <th className="text-white">Email</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr>
                <th>1</th>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src="https://i.ibb.co/bXbysTM/hero.png"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </td>
                <td>Zemla</td>
                <td>Purple.com</td>
              </tr>
              {/* row 2 */}
              {/* row 1 */}
              <tr>
                <th>1</th>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src="https://i.ibb.co/bXbysTM/hero.png"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </td>
                <td>Zemla</td>
                <td>Purple.com</td>
              </tr>
              {/* row 2 end */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Instructors;
