const MyClass = () => {
  return (
    <div className="py-5 bg-[#2F2F2F]">
      <h1 className="my-3 text-4xl text-white text-center">My Classes</h1>
      <div className="overflow-x-auto">
        <table className="table text-center text-white my-6">
          {/* head */}
          <thead>
            <tr>
              <th className="text-xl text-white">S/L</th>
              <th className="text-xl text-white">Photo</th>
              <th className="text-xl text-white">Class Name</th>
              <th className="text-xl text-white">Price</th>
              <th className="text-xl text-white">Available Seats</th>
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
              <td>pending</td>
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
              <td>Paid</td>
            </tr>
            {/* row 2 end */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyClass;
