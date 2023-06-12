import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const MyClass = () => {
  const { user } = useContext(AuthContext);
  const token = localStorage.getItem("access-token");

  const { data: instructorClass = [] } = useQuery({
    queryKey: ["allInstructor"],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/instructor/${user?.email}`,
        {
          headers: {
            authorization: `bearer ${token}`,
          },
        }
      );
      return res.json();
    },
  });

  const { data: enrolledClass = [] } = useQuery({
    queryKey: ["enrolledClass"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/total-enroll-class`);
      return res.json();
    },
  });

  return (
    <div className="py-5 h-full bg-[#2F2F2F]">
      <h1 className="my-3 text-4xl text-white text-center">My Classes</h1>
      <div className="overflow-x-auto">
        <table className="table text-center text-white my-6">
          {/* head */}
          <thead>
            <tr>
              <th className="text-xl text-white">S/L</th>
              <th className="text-xl text-white">Photo</th>
              <th className="text-xl text-white">Class Name</th>
              <th className="text-xl text-white">Available Seats</th>
              <th className="text-xl text-white">Status</th>
              <th className="text-xl text-white">Total Enrolled</th>
              <th className="text-xl text-white">Update</th>
              <th className="text-xl text-white">Feedback</th>
            </tr>
          </thead>
          <tbody>
            {/* show all instruct class added by instructor */}
            {instructorClass.map((singleClass, i) => (
              <tr key={i}>
                <th>{i + 1}</th>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={singleClass?.classPhoto}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </td>
                <td>
                  <p>{singleClass?.className}</p>
                  <p>Price: ${singleClass?.price}</p>
                </td>
                <td>{singleClass?.seats}</td>
                <td>{singleClass?.status}</td>
                <td>
                  {
                    enrolledClass.filter(
                      (cla) => cla.classId == singleClass._id
                    ).length
                  }
                </td>
                <td>
                  <Link
                    to={`/dashboard/update-class-details/${singleClass?._id}`}
                    className="btn bg-yellow-500 border-0 btn-circle"
                  >
                    <FaEdit />
                  </Link>
                </td>
                <td>
                  {singleClass?.status == "approved" || singleClass?.feedback}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyClass;
