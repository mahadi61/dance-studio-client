import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const PaymentHistory = () => {
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

  return (
    <div className="py-5">
      <h1 className="my-3 text-4xl text-center">All Payment History</h1>
      <div className="overflow-x-auto">
        <table className="table text-center my-6">
          {/* head */}
          <thead>
            <tr>
              <th className="text-xl text-black">S/L</th>
              <th className="text-xl text-black">Class Name</th>
              <th className="text-xl text-black">Payment Status</th>
              <th className="text-xl text-black">Paid Amount</th>
              <th className="text-xl text-black">Payment Time</th>
            </tr>
          </thead>
          <tbody>
            {/* all enrolledClass by user*/}
            {enrolledClass.map((cla, i) => (
              <tr key={i}>
                <th>{i + 1}</th>
                <td>{cla?.className}</td>
                <td>{cla?.paymentStatus}</td>
                <td>${cla?.price}</td>
                <td>{cla?.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
