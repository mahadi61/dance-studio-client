import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const MyEnrolledClasses = () => {
  const { user } = useContext(AuthContext);

  const { data: enrolledClass = [] } = useQuery({
    queryKey: ["enrolledClass"],
    queryFn: async () => {
      const res = await fetch(
        `https://dance-studio-server-seven.vercel.app/my-enroll-class/${user?.email}`
      );
      return res.json();
    },
  });

  return (
    <div className="py-5">
      <h1 className="my-3 text-4xl text-center">My Enrolled Classes</h1>
      <div className="overflow-x-auto">
        <table className="table text-center my-6">
          {/* head */}
          <thead>
            <tr>
              <th className="text-xl text-black">S/L</th>
              <th className="text-xl text-black">Class Photo</th>
              <th className="text-xl text-black">Class Name</th>
              <th className="text-xl text-black">Instructor Name</th>
              <th className="text-xl text-black">Instructor Email</th>
              <th className="text-xl text-black">Payment Status</th>
            </tr>
          </thead>
          <tbody>
            {/* all enrolledClass by user*/}
            {enrolledClass.map((cla, i) => (
              <tr key={i}>
                <th>{i + 1}</th>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={cla?.classPhoto} alt="class photo" />
                    </div>
                  </div>
                </td>
                <td>
                  <p>{cla?.className}</p>
                </td>
                <td>
                  <p>{cla?.instructorName}</p>
                </td>
                <td>
                  <p>{cla?.instructorEmail}</p>
                </td>
                <td>
                  <p>{cla?.paymentStatus}</p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyEnrolledClasses;
