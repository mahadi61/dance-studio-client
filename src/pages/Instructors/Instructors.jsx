import { useQuery } from "@tanstack/react-query";
import "./Instuctors.css";

const Instructors = () => {
  const { data: allInstructor = [] } = useQuery(["allInstructor"], async () => {
    const res = await fetch("http://localhost:5000/allInstructor");
    return res.json();
  });

  return (
    <div className="instructor-bg">
      <div className="w-11/12 mx-auto text-white pt-20">
        <h1 className="my-3 text-4xl text-center">All Instructors</h1>
        <div className="overflow-x-auto">
          <table className="table text-center my-6">
            {/* head */}
            <thead>
              <tr>
                <th className="text-white text-xl">S/L</th>
                <th className="text-white text-xl">Photo</th>
                <th className="text-white text-xl">Name</th>
                <th className="text-white text-xl">Email</th>
              </tr>
            </thead>
            <tbody>
              {/* all instructor show in row */}
              {allInstructor.map((instructor, i) => (
                <>
                  <tr>
                    <th>{i + 1}</th>
                    <td>
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={instructor?.photoUrl}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </td>
                    <td>{instructor?.name}</td>
                    <td>{instructor?.email}</td>
                  </tr>
                </>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Instructors;
