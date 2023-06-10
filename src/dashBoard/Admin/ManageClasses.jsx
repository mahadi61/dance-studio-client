import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const ManageClasses = () => {
  const { data: allClass = [], refetch } = useQuery({
    queryKey: ["allClass"],
    queryFn: async () => {
      const res = await axios.get(`http://localhost:5000/admin/allClasses`);
      return res.data;
    },
  });

  const handleApproved = (id) => {
    fetch(`http://localhost:5000/approved-classes/${id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire("Approved Successful!", "", "success");
          refetch();
        }
      });
  };

  const handleDenied = (id) => {
    fetch(`http://localhost:5000/denied-classes/${id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire("Denied Successful!", "", "success");
          refetch();
        }
      });
  };

  return (
    <div className="overflow-x-auto bg-[#828382] h-full text-white">
      <h1 className="text-center text-3xl font-bold my-6">Manage Classes</h1>
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th className="text-white">S/L</th>
            <th className="text-white">Class Photo</th>
            <th className="text-white">Class Information</th>
            <th className="text-white">Available seats</th>
            <th className="text-white">Price</th>
            <th className="text-white">Status</th>
            <th className="text-white">Approved</th>
            <th className="text-white">Denied</th>
            <th className="text-white">Feedback</th>
            <th className="text-white"></th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {allClass.map((cla, i) => (
            <>
              <tr>
                <td>{i + 1}</td>
                <td>
                  <div className="avatar">
                    <div className="mask mask-square w-12 h-12">
                      <img src={cla.classPhoto} alt="Class image" />
                    </div>
                  </div>
                </td>

                <td>
                  <div>
                    <div className="">
                      <span className="font-bold">Class:</span> {cla?.className}
                    </div>
                    <div className="">
                      <span className="font-bold">Instructor:</span>{" "}
                      {cla?.instructorName}
                    </div>
                    <div className="text-sm">
                      <span className="font-bold">Email:</span>{" "}
                      {cla?.instructorEmail}
                    </div>
                  </div>
                </td>
                <td>{cla?.seats}</td>
                <td>{cla?.price}</td>
                <td>{cla?.status}</td>
                <th>
                  <button
                    onClick={() => handleApproved(cla._id)}
                    disabled={
                      (cla?.status == "denied" || cla?.status == "approved") &&
                      true
                    }
                    className="btn btn-xs sm:btn-sm md:btn-md btn-info"
                  >
                    Approve
                  </button>
                </th>
                <th>
                  <button
                    onClick={() => handleDenied(cla._id)}
                    disabled={
                      (cla?.status == "denied" || cla?.status == "approved") &&
                      true
                    }
                    className="btn btn-xs sm:btn-sm md:btn-md btn-info"
                  >
                    Denied
                  </button>
                </th>
                <th>
                  <Link
                    // TODO: feedback button not work
                    // onClick={() => handleModal(cla._id)}
                    className="btn btn-xs sm:btn-sm md:btn-md btn-info"
                  >
                    Send Feedback
                  </Link>
                </th>
              </tr>
            </>
          ))}
        </tbody>
        {/* foot */}
      </table>
    </div>
  );
};

export default ManageClasses;
