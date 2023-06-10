import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Swal from "sweetalert2";

const ManageUsers = () => {
  const { data: allUsers = [], refetch } = useQuery({
    queryKey: ["allUsers"],
    queryFn: async () => {
      const res = await axios.get(`http://localhost:5000/allUsers`);
      return res.data;
    },
  });

  //   make role as an admin
  const handleMakeAdmin = (id) => {
    fetch(`http://localhost:5000/users/admin/${id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire("Make Admin Successful!", "", "success");
          refetch();
        }
      });
  };

  //   make role as Instructor
  const handleMakeInstructor = (id) => {
    fetch(`http://localhost:5000/users/instructor/${id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire("Make Instructor Successful!", "", "success");
          refetch();
        }
      });
  };

  return (
    <div className="py-5 bg-[#828382] h-full">
      <h1 className="my-3 text-4xl text-white text-center">Manage Users</h1>
      <div className="overflow-x-auto">
        <table className="table text-center text-white my-6">
          {/* head */}
          <thead>
            <tr>
              <th className="text-xl text-white">S/L</th>
              <th className="text-xl text-white">Photo</th>
              <th className="text-xl text-white">Name</th>
              <th className="text-xl text-white">Email</th>
              <th className="text-xl text-white">Make Admin</th>
              <th className="text-xl text-white">Make Instructor</th>
            </tr>
          </thead>
          <tbody>
            {/* data of all user  */}

            {allUsers.map((user, index) => (
              <>
                <tr>
                  <th>{index + 1}</th>
                  <td>
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={user.photoUrl}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </td>
                  <td>{user?.name}</td>
                  <td>{user?.email}</td>
                  <td>
                    <button
                      disabled={user?.role == "admin" && true}
                      onClick={() => handleMakeAdmin(user._id)}
                      className="btn btn-xs sm:btn-sm md:btn-md btn-success"
                    >
                      Make Admin
                    </button>
                  </td>
                  <td>
                    <button
                      disabled={user?.role == "instructor" && true}
                      onClick={() => handleMakeInstructor(user._id)}
                      className="btn btn-xs sm:btn-sm md:btn-md btn-info"
                    >
                      Make Instructor
                    </button>
                  </td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;
