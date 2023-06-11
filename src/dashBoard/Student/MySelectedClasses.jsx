import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../provider/AuthProvider";

const MySelectedClasses = () => {
  const { user } = useContext(AuthContext);

  const { data: selectedClass = [], refetch } = useQuery(
    ["selectedClass"],
    async () => {
      const res = await fetch(
        `http://localhost:5000/my-selected-class/${user?.email}`
      );
      return res.json();
    }
  );

  const handleDelete = (id) => {
    const data = { id };
    fetch("http://localhost:5000/delete-class", {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          Swal.fire("Deleted Successful!", "", "success");

          refetch();
        }
      });
  };

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
              <th className="text-xl text-black">Payment Status</th>
              <th className="text-xl text-black">Payment</th>
              <th className="text-xl text-black">Delete</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {selectedClass.map((cla, i) => (
              <tr key={i}>
                <th>{i + 1}</th>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={cla?.classPhoto}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </td>
                <td>{cla?.className}</td>
                <td>${cla?.price}</td>
                <td>{cla?.paymentStatus}</td>
                {/* <td>{console.log(cla)}</td> */}
                <td>
                  <Link
                    to={`/dashboard/payment/${cla?._id}/${cla?.enrolledClassId}/${cla?.price}`}
                    className="btn btn-primary border-0 text-white"
                  >
                    Pay Now
                  </Link>
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(cla?._id)}
                    className="btn btn-circle bg-yellow-400 border-0 hover:bg-[red] text-2xl"
                  >
                    <AiFillDelete />
                  </button>
                </td>
              </tr>
            ))}
            {/* row 2 */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MySelectedClasses;
