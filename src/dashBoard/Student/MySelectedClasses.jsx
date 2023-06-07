import { AiFillDelete } from "react-icons/ai";

const MySelectedClasses = () => {
  return (
    <div className="py-5">
      <h1 className="my-3 text-4xl text-center">My Selected Classes</h1>
      <div className="overflow-x-auto">
        <table className="table text-center my-6">
          {/* head */}
          <thead>
            <tr>
              <th className="text-xl text-black">S/L</th>
              <th className="text-xl text-black">Photo</th>
              <th className="text-xl text-black">Class Name</th>
              <th className="text-xl text-black">Price</th>
              <th className="text-xl text-black">Pay</th>
              <th className="text-xl text-black">Delete</th>
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
              <td>
                <button className="text-2xl">
                  <AiFillDelete />
                </button>
              </td>
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
              <td>
                <button className="text-2xl">
                  <AiFillDelete />
                </button>
              </td>
            </tr>
            {/* row 2 end */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MySelectedClasses;
