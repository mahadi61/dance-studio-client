import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const MyEnrolledClasses = () => {
  const { user } = useContext(AuthContext);

  const { data: enrolledClass = [] } = useQuery({
    queryKey: ["enrolledClass"],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/my-enroll-class/${user?.email}`
      );
      return res.json();
    },
  });

  const { data: allClass = [] } = useQuery({
    queryKey: ["allClass"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/admin/allClasses`);
      return res.json();
    },
  });
  // TODO: need to final enrolled class by id from all class
  console.log("enrolledcls", enrolledClass);
  console.log("allcls", allClass);

  // const enrolledClassByUser =

  return (
    <div className="py-5">
      <h1 className="my-3 text-4xl text-center">My Enrolled Classes</h1>
      <div className="overflow-x-auto">
        <table className="table text-center my-6">
          {/* head */}
          <thead>
            <tr>
              <th className="text-xl text-black">S/L</th>
              <th className="text-xl text-black">Enrolled By</th>
              <th className="text-xl text-black">Email</th>
              <th className="text-xl text-black">Payment Status</th>
            </tr>
          </thead>
          <tbody>
            {/* all enrolledClass by user*/}
            {enrolledClass.map((cla, i) => (
              <tr key={i}>
                <th>{i + 1}</th>
                <td>{cla?.name}</td>
                <td>{cla?.email}</td>
                <td>{cla?.paymentStatus}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyEnrolledClasses;
