import { useQuery } from "@tanstack/react-query";

const ManageUsers = () => {
  const { data: allUsers = [], refetch } = useQuery(["allUsers"], async () => {
    const res = await fetch("http://localhost:5000/allUsers");
    return res.json();
  });

  return (
    <div className="py-5 bg-[#2F2F2F] h-full">
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
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    <button className="btn btn-xs sm:btn-sm md:btn-md btn-success">
                      Make Admin
                    </button>
                  </td>
                  <td>
                    <button className="btn btn-xs sm:btn-sm md:btn-md btn-info">
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
